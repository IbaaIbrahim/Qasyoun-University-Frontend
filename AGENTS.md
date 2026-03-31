# Agent notes: QPU frontend integration

This app implements [Qasyoun Private University](https://qpu.edu.sy/) against the REST API in `v1.json` at the repo root.

## Scope and documentation (read this first)

- **Document what you change** in this file when you materially extend behavior, routes, or cross-cutting setup (API, i18n, env), so the next session matches reality.
- **Stay in the current working area** unless the user explicitly asks to broaden scope. For this repo that means: the **shipped pages and routes listed below** (home, faculties on home, faculties index, faculty detail), plus shared shell pieces they depend on (header/footer/i18n). Do **not** migrate or “finish” template demo routes, mega-menu targets, or unused screens by default.

## Shipped pages and routes (current)

All user-facing app routes live under the **`[locale]`** segment (`src/app/[locale]/`). Locales: **`en`** (default) and **`ar`**.

| User-facing URL (EN default) | Arabic prefix | What it is |
| --- | --- | --- |
| `/` | `/ar` | **Home** — main landing; includes the **faculties teaser** block (`FacultyArea`) backed by `listFacultiesForPublic()`. |
| `/faculties` | `/ar/faculties` | **Faculties list** — grid of faculty cards from the API. |
| `/faculties/[slug]` | `/ar/faculties/[slug]` | **Faculty detail** — breadcrumb + hero strip with API `name`; remaining sections are still template placeholders. |

Default locale uses **`localePrefix: 'as-needed'`** (no `/en` in the path). Template-only links in `menu-data` and elsewhere may still point at demo paths that are **not** implemented here.

## Localization (how it is configured)

We use **[next-intl](https://next-intl.dev)** with the App Router pattern:

| Piece | Role |
| --- | --- |
| `src/i18n/routing.ts` | `defineRouting`: locales `en` / `ar`, `defaultLocale: 'en'`, `localePrefix: 'as-needed'`. |
| `src/i18n/navigation.ts` | `createNavigation(routing)` → **`Link`**, **`redirect`**, **`useRouter`**, **`usePathname`**, **`getPathname`** (use these for in-app URLs so the active locale is preserved). |
| `src/i18n/request.ts` | `getRequestConfig`: resolves locale and loads `messages/{locale}.json`. |
| `src/middleware.ts` | `createMiddleware(routing)` — locale detection and prefix handling. |
| `next.config.mjs` | `createNextIntlPlugin('./src/i18n/request.ts')`. |
| `messages/en.json`, `messages/ar.json` | Copy and namespaces (e.g. `Metadata`, `Nav`, `Header`, `Footer`, `Faculties`, `FacultyArea`, …). |
| `src/app/[locale]/layout.tsx` | Sets `<html lang>` and **`dir="rtl"`** for Arabic; wraps with `NextIntlClientProvider`; loads fonts (including **Noto Sans Arabic**). |
| `src/app/globals.scss` | `[dir="rtl"] body` uses the Arabic font stack. |

**Hooks and helpers:**

- **Client:** `useLocaleSwitch()` in `src/hooks/use-locale-switch.ts` (`locale`, `dir`, `isRtl`, `switchLocale`). Also `useTranslations` / `useLocale` from `next-intl` where needed.
- **Server:** `getTranslations` / `getLocale` from `next-intl/server`; optional `getServerLocaleInfo()` in `src/lib/i18n/server-locale.ts`; `isRtlLocale()` in `src/lib/i18n/locale.ts`.
- **Internal links:** prefer `import { Link } from '@/i18n/navigation'` (or `NavLink` in `src/components/i18n/nav-link.tsx` for `#` vs path).

## Acadia template (side-by-side)

The **Acadia template** lives in a **separate repository** next to this one (e.g. sibling folder `Acadia-Template` under the same parent directory). Treat it as the **canonical reference** for:

- Visual design, spacing, and SCSS variables
- Reusable React components and layout patterns
- Page structure and naming conventions from the demo

**Do not rely on copying the whole template into this repo.** Keep the template **unchanged** so it stays a stable catalog. When you need a screen or block, **copy only what you need** from the template into this project (components, styles, assets paths), then wire it to QPU data and the API layers below.

**This repository (`Qasyoun-University-Frontend`)** stays **lean**: there is no obligation to preserve an in-repo “archive” of every demo page—the template is always available beside the project.

## Layering convention

| Layer | Path | Role |
| --- | --- | --- |
| DTO | `src/lib/dto/` | TypeScript types aligned with OpenAPI (`v1.json`). |
| API | `src/lib/api/` | HTTP via shared **axios** `apiClient` (`client.ts`). One module per resource (e.g. `faculty.api.ts`). |
| Classes | `src/lib/classes/` | Domain helpers (e.g. `Faculty.fromDto()`, `toPlain()` for Server → Client). |
| Services | `src/lib/services/` | Page-facing orchestration: filters, public-only rules, error handling. |

**Server → Client props:** only plain serializable objects into `"use client"` trees (e.g. `FacultyPlain` via `faculty.toPlain()`).

## Environment

- `NEXT_PUBLIC_API_BASE_URL` — optional; see `.env.example`. Default can match `servers[0].url` in `v1.json`.

## Navigation

Menus: `src/data/menu-data.ts`. Footer: `src/data/footer-links.ts`. Top-level nav labels for the shipped header use next-intl; many dropdown links still reference template-only paths.

## Rendering

Dynamic routes that call the API may use `export const dynamic = 'force-dynamic'` and tolerant service methods (e.g. empty lists on failure) so builds and offline runs do not depend on the API.

## Read endpoints

`GET /api/{Resource}/Read` uses a `request` query parameter with JSON for `DataSourceRequest` (see `src/lib/dto/data-source.dto.ts`), e.g. `{ "skip": 0, "take": 100 }`.

## Next steps (suggested)

- Map media URLs when the API documents file delivery for `pictureId` / `logoId`.
- Add resources using the same dto → api → class → service pattern.
- When adding a **new** user-facing route, extend `messages/*.json`, wire `Link` from `@/i18n/navigation`, and update the **Shipped pages and routes** table above.
