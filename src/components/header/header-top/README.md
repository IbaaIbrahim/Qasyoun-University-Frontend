# Header top bar

Replaced the template social/phone/links row with:

1. **Language switcher** — first in the flex row so it sits on the **inline-start** side (`en` left, `ar` right under `dir="rtl"`).
2. **News carousel** — `listNewsBannerItems()` loads `Content` then `ContentMeta`.

**Content query (Telerik `filters`):**  
`referenceId~eq~0,referenceType~eq~news,type~eq~home`  
(Client still guards `referenceId === 0`, `referenceType === "news"`, `type === "home"`.)

**ContentMeta:** localized headline / excerpt / link / optional image come from typical `type` / `keyName` pairs (see `src/lib/services/news-banner.service.ts`).

**Filter quirk:** for a **single** `contentId`, `ContentMeta/Read` uses `filter=contentId~eq~'n'` **without** wrapping `(…)` so all meta rows are returned.
