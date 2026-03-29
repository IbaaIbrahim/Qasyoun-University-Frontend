# Agent notes: QPU frontend integration

This app implements [Qasyoun Private University](https://qpu.edu.sy/) against the REST API in `v1.json` at the repo root.

## Acadia template (side-by-side)

The **Acadia template** lives in a **separate repository** next to this one (e.g. sibling folder `Acadia-Template` under the same parent directory). Treat it as the **canonical reference** for:

- Visual design, spacing, and SCSS variables
- Reusable React components and layout patterns
- Page structure and naming conventions from the demo

**Do not rely on copying the whole template into this repo.** Keep the template **unchanged** so it stays a stable catalog. When you need a screen or block, **copy only what you need** from the template into this project (components, styles, assets paths), then wire it to QPU data and the API layers below.

**This repository (`Qasyoun-University-Frontend`)** may stay **lean**: remove or avoid routes and UI you do not ship. There is no obligation to preserve an in-repo “archive” of every demo page—the template is always available beside the project.

## Active app routes (current)

- `(home)/(home-main)/` — public home.
- `(home)/faculties/` — faculty index and `[slug]` detail.

Expand `src/app` as you migrate; use the template as the source of truth for markup and styling.

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

Menus: `src/data/menu-data.ts`. Footer: `src/data/footer-links.ts`. Extend these as real routes are added.

## Rendering

Dynamic routes that call the API may use `export const dynamic = 'force-dynamic'` and tolerant service methods (e.g. empty lists on failure) so builds and offline runs do not depend on the API.

## Read endpoints

`GET /api/{Resource}/Read` uses a `request` query parameter with JSON for `DataSourceRequest` (see `src/lib/dto/data-source.dto.ts`), e.g. `{ "skip": 0, "take": 100 }`.

## Next steps (suggested)

- Pull new pages from `Acadia-Template` only when needed; adapt imports to this app’s `@/` layout.
- Map media URLs when the API documents file delivery for `pictureId` / `logoId`.
- Add resources using the same dto → api → class → service pattern.
