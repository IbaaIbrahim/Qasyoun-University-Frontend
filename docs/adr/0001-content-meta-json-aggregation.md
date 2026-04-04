# Unified Content and Meta JSON Aggregation

## Status

Accepted

## Date

2026-04-04

## Context

The backend serves UI content via a generalized `Content` and `ContentMeta` structure over a robust Telerik API. Previously, components fetching UI layouts (e.g., News Banner, Hero Slider) were performing manual, non-unified secondary passes: extracting IDs from `Content`, separately querying `ContentMeta`, and then manually scanning standard arrays for `isTitleMeta` or `isExcerptMeta` predicates based on locale logic and hardcoded types. This was resulting in boilerplate repetition across UI service layers, fragile mapping, and high coupling. 

## Decision

We introduced a unified, standardized structural approach utilizing the `ContentJson` data model and a single generalized service helper `readContentAsJsonByFilter`.

1. **`ContentJson` Wrapper:** The new class inherits from `Content` but securely condenses and normalizes the recursive `contentMetas` array into a flat dictionary named `contentMetasJson`, keyed by each meta's `keyName`.
2. **Global Fetch Orchestration (`readContentAsJsonByFilter`):** Service files now invoke this global method passing a pure JSON filter. The method securely strings them using Telerik parameters (`key~eq~'value'`), retrieves resolving API DTOs (which now includes nested metas natively via `/api/Content/Read`), and instantiates pure structured objects properly scoped to the current locale.

## Consequences

**Positive:**
- **Code Cleanliness:** Greatly reduced boilerplate in localized resource fetching (e.g., `news-banner.service.ts` heavily shrunk). 
- **Type Safety and Consistency:** Standardizes array iteration; you no longer deal with manual ID searches or missing predicate mappings.
- **Improved Performance:** Enables relying heavily on unified API payloads and standardizes the format required to cast data into specific React UI classes (e.g. `toSlider()`).

**Negative / tradeoffs:**
- Components adopting this approach now explicitly depend on pure backend string names (`keyName`) matching exactly to build dynamic maps `meta["news-title"]`. If CMS editors mutate a `keyName` schema field, front-end objects might miss the values quietly.

**Follow-ups:**
- Refactor all remaining one-off `Content` + `ContentMeta` API integration logic currently scattered across other widgets or components into calling `readContentAsJsonByFilter`.
