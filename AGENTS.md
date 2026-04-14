# Agent notes: QPU frontend integration

This app implements [Qasyoun Private University](https://qpu.edu.sy/).

## Scope and documentation (read this first)

- **REQUIRED:** You MUST fetch and read all `.mdc` files under `.cursor/rules/` (like `documentation-adr-and-readme.mdc`) at the start of every task in each request. Always adhere to the rules in these files.
- **Document what you change** in this file when you materially extend **global** behavior: shipped routes table, cross-cutting setup (API, i18n, env), or this structure overview.
- **Feature-specific “why/how”** belongs **next to the code** (e.g. `src/components/hero-area/README.md`). Use **`docs/adr/`** only for repo-wide architectural decisions (see `docs/adr/README.md`).
- **Stay in the current working area** unless the user explicitly asks to broaden scope. For this repo that means: the **shipped pages and routes listed below** (home, faculties on home, faculties index, faculty detail), plus shared shell pieces they depend on (header/footer/i18n). Do **not** migrate or “finish” template demo routes, mega-menu targets, or unused screens by default.

## Project structure (global)

High-level map of this repository:

| Area               | Path                                                          | Purpose                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App Router         | `src/app/`                                                  | Next.js layouts,`globals.scss`, root wiring; **all user routes under** `src/app/[locale]/`.                                                                                                                                               |
| Pages (shipped)    | `src/app/[locale]/(home)/…`                                | Home, faculties list, faculty detail; use `dynamic = 'force-dynamic'` where the API is required at request time.                                                                                                                                  |
| UI components      | `src/components/`                                           | Acadia-derived blocks;**shipped shell** in `header/` (includes API **news strip** in `header-top/` + language switcher), `footer/`; feature folders (`faculty/`, `hero-area/`, …). Hero: colocated README in `hero-area/`. |
| Data & menus       | `src/data/`                                                 | `menu-data.ts`, `footer-links.ts` (many links still point at template-only paths).                                                                                                                                                              |
| Integration layers | `src/lib/api/`, `src/lib/classes/`, `src/lib/services/` | OpenAPI-shaped types (within classes), axios resources, domain helpers, page-facing orchestration (**api → class → service**).                                                                                                              |
| i18n               | `src/i18n/`, `messages/`                                  | next-intl routing, navigation helpers, locale messages (`en` / `ar`).                                                                                                                                                                           |
| Hooks              | `src/hooks/`                                                | Shared client hooks (e.g. locale switch).                                                                                                                                                                                                           |
| Static assets      | `public/`                                                   | Theme images, compiled CSS from template SCSS where applicable.                                                                                                                                                                                     |
| ADRs               | `docs/adr/`                                                 | Cross-cutting architecture decisions—not every feature.                                                                                                                                                                                            |

**Server → client:** pass only **plain JSON-serializable** props into `"use client"` trees (e.g. `FacultyDto` via `toPlain()`).

## Shipped pages and routes (current)

All user-facing app routes live under the **`[locale]`** segment (`src/app/[locale]/`). Locales: **`en`** (default) and **`ar`**.

| User-facing URL (EN default) | Arabic prefix            | What it is                                                                                                                                                                                                 |
| ---------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                        | `/ar`                  | **Home** — main landing; includes the **faculties teaser** block (`FacultyArea`) backed by `listFacultiesForPublic()`.                                                                    |
| `/faculties`               | `/ar/faculties`        | **Faculties list** — grid of faculty cards from the API.                                                                                                                                            |
| `/faculties/[slug]`        | `/ar/faculties/[slug]` | **Faculty detail** — hero, content, labs/mission, and **faculty team** (`FacultyTeacher` + `Teacher` via `listTeachersByFacultyId()`); other blocks may still be template placeholders. |

Default locale uses **`localePrefix: 'as-needed'`** (no `/en` in the path). Template-only links in `menu-data` and elsewhere may still point at demo paths that are **not** implemented here.

**Home hero** (API wiring, image-only decision, file map): `src/components/hero-area/README.md`.

## Localization (how it is configured)

We use **[next-intl](https://next-intl.dev)** with the App Router pattern:

| Piece                                      | Role                                                                                                                                                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/i18n/routing.ts`                    | `defineRouting`: locales `en` / `ar`, `defaultLocale: 'en'`, `localePrefix: 'as-needed'`.                                                                                                                       |
| `src/i18n/navigation.ts`                 | `createNavigation(routing)` → **`Link`**, **`redirect`**, **`useRouter`**, **`usePathname`**, **`getPathname`** (use these for in-app URLs so the active locale is preserved). |
| `src/i18n/request.ts`                    | `getRequestConfig`: resolves locale and loads `messages/{locale}.json`.                                                                                                                                               |
| `src/middleware.ts`                      | `createMiddleware(routing)` — locale detection and prefix handling.                                                                                                                                                    |
| `next.config.mjs`                        | `createNextIntlPlugin('./src/i18n/request.ts')`.                                                                                                                                                                        |
| `messages/en.json`, `messages/ar.json` | Copy and namespaces (e.g.`Metadata`, `Nav`, `Header`, `Footer`, `Faculties`, `FacultyArea`, …).                                                                                                              |
| `src/app/[locale]/layout.tsx`            | Sets `<html lang>` and **`dir="rtl"`** for Arabic; wraps with `NextIntlClientProvider`; loads fonts (including **Noto Sans Arabic**).                                                                   |
| `src/app/globals.scss`                   | `[dir="rtl"] body` uses the Arabic font stack.                                                                                                                                                                          |

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

| Layer    | Path                  | Role                                                                                                                                                                                                              |
| -------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API      | `src/lib/api/`      | HTTP via shared**axios** `apiClient` (`client.ts`, exports `API_BASE_URL` / `resolveUploadSrc`). One module per resource (e.g. `faculty.api.ts`, `faculty-teacher.api.ts`, `teacher.api.ts`). |
| Classes  | `src/lib/classes/`  | OpenAPI types (DTOs) and domain helpers (e.g.`Faculty.fromDto()`, `toPlain()` for Server → Client).                                                                                                          |
| Services | `src/lib/services/` | Page-facing orchestration: filters, public-only rules, error handling.                                                                                                                                            |

## Navigation

Menus: `src/data/menu-data.ts`. Footer: `src/data/footer-links.ts`. Top-level nav labels for the shipped header use next-intl; many dropdown links still reference template-only paths.

## Rendering

Dynamic routes that call the API may use `export const dynamic = 'force-dynamic'` and tolerant service methods (e.g. empty lists on failure) so builds and offline runs do not depend on the API.

## Theme

The primary color of the website is #42023e

## Read endpoints (Telerik pattern)

The backend uses the same Telerik/Kendo DataSource-style query pattern across `GET /api/{Resource}/Read` endpoints.

Use query params (not request body), typically:

- `page`, `pageSize` for paging
- `skip`, `take` for offset paging
- `filter` or `filters` for expressions such as `field~eq~'value'`
- optional sort/group params as supported by each endpoint

Important integration rule:

- Some resources accept **`filter`** (singular), others **`filters`** (plural). Keep the param name exactly as that endpoint expects.
- Example working shape for `ContentMeta`: `?filter=contentId~eq~'2'&page=1&pageSize=100`

Recommended service behavior:

- Always send the expected Telerik query param name for that specific endpoint.
- Keep tolerant client-side guards in services (`isActive`, expected `type`, id matching) in case backend filtering is loose in some environments.

## Next steps (suggested)

- Map media URLs when the API documents file delivery for `pictureId` / `logoId`.
- Add resources using the same api → class → service pattern.
- When adding a **new** user-facing route, extend `messages/*.json`, wire `Link` from `@/i18n/navigation`, and update the **Shipped pages and routes** table above.
