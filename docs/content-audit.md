# Content Audit Ledger

**Policy:** [Editorial Content and Verification Policy](./editorial-content-policy.md)  
**Last ledger review:** 2026-07-13  
**Scope:** detailed gameplay routes are deliberately `noindex, follow` and excluded from the Sitemap while this audit is incomplete.

## Status definitions

- **Under source review:** material claims have not yet been mapped to current, attributable evidence.
- **Verified:** every material claim has an evidence brief, a version/date scope, and editorial review. Only this status permits re-indexing.
- **Stale:** previously verified claims may no longer apply following an update; treat as `noindex` until rechecked.

## Route audit queue

| Priority | Route | Localized route | Content type | Risk | Status | Known issue | Required evidence before re-indexing |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | `/info/system-requirements` | `/zh-cn/info/system-requirements` | PC requirements | Medium | Verified | Rewritten to the current official Steam-listed requirements; unsupported engine, Steam Deck, frame-rate, upscaler, and benchmark claims removed. | Recheck after a Steam listing or game update changes the requirements. |
| P0 | `/updates/roadmap` | `/zh-cn/updates/roadmap` | roadmap/release information | High | Under source review | Dates and future plans are especially likely to change. | Official announcement or patch-note source for each date/feature; source date; revision log. |
| P0 | `/guides/multiplayer` | `/zh-cn/guides/multiplayer` | co-op/cross-play | High | Under source review | Player-count, platform, and cross-play statements require official or versioned verification. | Official feature/support source or documented current-build verification. |
| P0 | `/guides/beginner-guide` | `/zh-cn/guides/beginner-guide` | progression/how-to | High | Under source review | Likely to contain version-sensitive mechanics and progression detail. | Evidence brief for every material step, with applicable build/version. |
| P1 | `/resources` and `/resources/[slug]` | `/zh-cn/resources` and `/zh-cn/resources/[slug]` | resources, drops, locations, uses | High | Under source review | Exact resource locations, recipes, and uses are material gameplay claims. | Official/current-build evidence for each location, drop, and use; scope every affected entry. |
| P1 | `/creatures` | `/zh-cn/creatures` | creature database | High | Under source review | Names, behavior, habitat, and counts require evidence. | Current official/game evidence per creature record. |
| P1 | `/base-building` | `/zh-cn/base-building` | building/mechanics | High | Under source review | Build rules, unlocks, locations, and materials are version-sensitive. | Official/current-build evidence for each substantive claim. |
| P1 | `/biomods` | `/zh-cn/biomods` | mechanics/upgrades | High | Under source review | Names, requirements, and effects require evidence. | Current official/game evidence per entry. |
| P1 | `/guides/digestive-incompatibility` | `/zh-cn/guides/digestive-incompatibility` | status/mechanics | High | Under source review | Specific condition/cure claims need direct evidence. | Versioned, reproducible verification and source brief. |
| P1 | `/guides/angel-comb` | `/zh-cn/guides/angel-comb` | item/location/use | High | Under source review | Exact item and location claims need direct evidence. | Current official/game evidence for identification, location, and use. |
| P1 | `/guides/feedback-resonator` | `/zh-cn/guides/feedback-resonator` | item/unlock/mechanics | High | Under source review | Exact unlock/use claims need direct evidence. | Current official/game evidence and build scope. |

## Re-index checklist (complete per route)

- [ ] Create `docs/content-briefs/<route-slug>.md` with every material claim and source.
- [ ] Rewrite the English page, including title, description, FAQ, and structured data, to match evidence.
- [ ] Apply the same evidence status and scope to the Chinese route.
- [ ] Add a visible “Sources / Last checked / Applicable version” block.
- [ ] Peer-review page text and metadata.
- [ ] Mark this route **Verified** in this ledger.
- [ ] Narrow/remove the relevant Worker `noindex` rule safely.
- [ ] Add the exact English and Chinese URLs to `sitemap.ts`.
- [ ] Build, deploy, verify production headers and sitemap, then request re-indexing.

## Audit log

| Date | Route(s) | Action | Result |
| --- | --- | --- | --- |
| 2026-07-13 | detailed gameplay routes | Search quarantine introduced; routes removed from Sitemap. | Under source review; `X-Robots-Tag: noindex, follow` applied. |
| 2026-07-13 | `/info/system-requirements` | Created a Steam evidence brief, rewrote page to source-backed PC requirements, restored Sitemap inclusion. | Verified; recheck after official requirements change. |
