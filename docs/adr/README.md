# Architecture Decision Records (ADRs)

This folder is **only** for **repo-wide or long-lived architectural decisions**—not for every feature note.

## Colocated docs come first

For day-to-day work, prefer a short **`README.md` (or `NOTES.md`) inside the folder you’re changing**—e.g. under `src/lib/api/`, `src/lib/services/`—so context sits next to the code. Link *to* an ADR from there when the folder implements a global decision.

## When to add an ADR here

Add one when the choice is **hard to reverse**, **spans many modules**, or sets **policy** others must follow (i18n strategy, API query conventions, auth, deployment). Routine integration details belong in colocated READMEs or JSDoc.

## Naming

`NNNN-short-kebab-title.md` (next number = max existing + 1). Template: `0000-template.md`.

## Layers of “why”

| Layer | Where | Use for |
| --- | --- | --- |
| JSDoc | On the function | API quirks, fallbacks, one-off *why* |
| README / NOTES | In the folder | How this subtree works, file map, local gotchas |
| ADR | `docs/adr/` | Cross-cutting decision + consequences |

## Status

`Proposed` | `Accepted` | `Deprecated` | `Superseded by NNNN`
