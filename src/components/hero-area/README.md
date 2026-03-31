# Home hero (`HeroAreaOne`)

## Decision

- **UI:** Image-only slider (no headline, subline, or CTA on the slide). Swiper markup stays close to the Acadia template for styling.
- **Data:** **`Content`** supplies **slide rows** only (identity + sort): active items with `referenceType=home`, `type=hero-slider`; we use **`id`** and **`displayOrder`**. **`ContentDto` in this repo intentionally omits copy fields** the hero does not consume.
- **Images:** **`ContentMeta`** supplies backgrounds: **one Swiper slide per meta row** (ordered by `displayOrder`) whose localized **`value` / `value_AR`** is a usable URL (`http(s)` or site-relative `/...`). Types are not limited to `image` (CMS may use other type codes as long as the value is the image URL). Slide **`id`** is `${contentId}-${metaId}` for stable React keys.
- **Resilience:** Client-side filters guard `referenceType` / `type` / `contentId` when the backend returns extra rows. Slides without a usable image meta are dropped; if nothing remains or the API errors, **static fallback images** are used.

## API calls (Telerik-style query strings)

1. **`GET /api/Content/Read`** — `filters=referenceType~eq~home,type~eq~hero-slider` (plus `page` / `pageSize`). Collect ordered content **`id`** values.
2. **`GET /api/ContentMeta/Read`** — **singular** param **`filter`** (not `filters`), e.g.  
   `filter=(contentId~eq~'{id1}'~or~contentId~eq~'{id2}'~or~...)`  
   Single-id example: [ContentMeta Read](https://api.v2202503187605326384.powersrv.de/api/ContentMeta/Read?filter=contentId~eq~'2'&page=1&pageSize=100).

## Files

| File | Role |
| --- | --- |
| `hero-area-one.tsx` | Server: `getLocale()` → `listHomeHeroSlides()` → passes plain slides to client |
| `hero-area-one-slider.tsx` | Client: Swiper (fade, prev/next when 2+ slides) + background images only |
| `src/lib/services/home-hero.service.ts` | Orchestrates Content + ContentMeta + fallbacks |
| `src/lib/api/content.api.ts` | Content Read (`filters`) |
| `src/lib/api/content-meta.api.ts` | ContentMeta Read (`filter`) |

Other `hero-area-*.tsx` files are **template variants**; only **`HeroAreaOne`** is wired for the shipped home page.
