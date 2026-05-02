---
trigger: always_on
---

# Content and ContentMeta API Usage Pattern

When fetching generic section dynamic data (like slider images, texts, features, etc.) from the QPU backend, you must follow the two-step `Content` and `ContentMeta` pattern.

## 1. Fetching the Content Structure
Use `/api/Content/Read` to get the list of generic items for a specific section on a page context.
Query by filtering these fields:
- `referenceType`: The page or entity context we are in. For example:
  - If we are on the **home page**, `referenceType` is `'home'` and `referenceId` is `0` or `null`.
  - If we are inside the **faculties list**, `referenceType` is `'faculties'` and `referenceId` is `null` or `0`.
  - If we are inside **faculty details**, `referenceType` is `'faculty'` and `referenceId` is the ID or slug of the faculty.
- `referenceId`: The ID associated with the `referenceType` (as explained above).
- `type`: The specific section within the page that we are working with (e.g. `'news'`, `'slider-1'`, or `'slider-2'`). A section type can exist multiple times; for example, if `'slider-1'` exists twice, it means we have two separate items (e.g., two slides) for that slider, each with its own `contentId`.

This query returns multiple `Content` records (one for each slider item, step, etc). Extract the **ID** from each of these records to form a list of `contentId`s.

## 2. Fetching Metadata (ContentMeta)
Once you have the `contentId`s, trigger request(s) to `/api/ContentMeta/Read` to fetch all metadata matching those `contentId`s.
This returns a flat array of meta records. You must group these records by their `contentId`.

## 3. Assembling the Data
For each `contentId`, you will use its associated `ContentMeta` records to populate your domain classes/components. We generate this as a normal JSON object by treating the `keyName` of each `ContentMeta` row as an object key.

**Key constraints and structure:**
- `contentMeta` maps directly to the keys of the item (e.g., the properties of a slide).
- `keyName` shouldn't be duplicated within a single `content` record.
- `keyName` is unique per `contentId`, acting as the real property key for that specific content instance.

**Example Structure (Slider item with image and text):**
For a given `contentId`, you may receive multiple records in `ContentMeta`:
- **Image:** A record with `keyName: 'src'` (an external image link) OR `keyName: 'fileManagerId'` (the backend ID of an uploaded image file).
- **Text:** A record with `keyName: 'value'` (containing string text corresponding to a specific place in the slider item).

Combine these key-values into meaningful JSON objects or representations for your components.
