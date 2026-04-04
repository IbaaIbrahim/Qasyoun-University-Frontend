# API Module

This directory contains Axios API wrappers for fetching data from the backend. 
A key architectural pattern for dynamic sections in this repository relates to `Content` and `ContentMeta`:

## Content and ContentMeta Data Pattern

When fetching generic section dynamic data (like slider images, texts, features, etc.) from the backend, use the two-step `Content` and `ContentMeta` process.

### Step 1: Content Structure (`/api/Content/Read`)
Get the list of generic items for a specific page section by filtering:
- `referenceId`: The parent entity ID (e.g. Faculty ID).
- `referenceType`: The generic type of the parent (e.g. `'faculty'`).
- `type`: The specific section (e.g. `'slider'`).

This provides an array of records representing individual section items. Extract their `id`s as `contentId`s.

### Step 2: Content Metadata (`/api/ContentMeta/Read`)
Fetch all metadata for those `contentId`s. You will receive a flat array of keys/values. Group them by `contentId`.
- **Image handling:** Check for `type: 'text'` with either `keyName: 'imageSrc'` (link) or `keyName: 'fileManagerId'` (backend image ID). 
- **Text handling:** Check for `type: 'text'` with `keyName: 'value'`.

See the `.cursor/rules/` for further global coding instructions regarding integration.
