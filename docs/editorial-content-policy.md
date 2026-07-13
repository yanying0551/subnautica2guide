# Editorial Content and Verification Policy

**Effective date:** 2026-07-13  
**Applies to:** all public content on subnautica2guide.wiki, in English and Chinese

## Purpose

Subnautica 2 is update-sensitive. This site must not present an unsupported game detail as settled fact. This policy governs new writing, updates, translations, metadata, structured data, navigation labels, and search-index eligibility.

## Source hierarchy

1. **Primary official source:** developer/publisher announcement, official website, Steam store entry or news post, official patch notes, or official support documentation.
2. **Versioned first-hand verification:** a reproducible observation in the current public build, recorded with platform, build/version, method, date, and evidence retained by the editor.
3. **Reliable secondary reporting:** used only for clearly attributed context when a primary source is unavailable; it cannot establish a precise gameplay claim on its own.
4. **Community reports:** discovery leads only. They are not sufficient evidence for a factual claim.

## Required claim record

Every detailed gameplay page must have a companion record in `docs/content-audit.md` and, before publication or re-indexing, a page-specific evidence brief in `docs/content-briefs/` containing:

- public route and localized route;
- claim or claim group;
- source URL or first-hand verification record;
- source type and publication/update date;
- verification date;
- applicable platform and game version/build, if known;
- editor decision: verified, partially verified, unsupported, or stale;
- exact page sections affected.

## Writing rules

- Do not infer Subnautica 2 facts from earlier Subnautica titles.
- Do not publish exact locations, coordinates, recipes, unlock requirements, item drops, biome boundaries, creature behavior, player limits, cross-play, release dates, prices, performance figures, or roadmap timing without evidence appropriate to the claim.
- When a claim is uncertain, say what is known, name the limitation, and link to its source when available. Do not fill gaps with plausible detail.
- A translation must preserve the evidence status and scope of its source text; it must not add specificity.
- Metadata, Open Graph text, JSON-LD, cards, navigation, FAQ, and calls to action are factual content and follow the same policy.

## Page states and indexing

| State | Meaning | Search treatment |
| --- | --- | --- |
| Verified | Material claims have current, attributable evidence and a page evidence brief. | May be indexed and included in Sitemap after editorial review. |
| Partially verified | Some useful claims are evidenced, but material sections remain unresolved. | Keep `noindex, follow`; state the limitation visibly. |
| Under source review | Evidence collection or rewrite is incomplete. | Keep `noindex, follow`; exclude from Sitemap. |
| Stale | Evidence is superseded or game updates may invalidate material claims. | Return to `noindex, follow` until rechecked. |

A page may leave `noindex` only when its audit record is **Verified**, a reviewer checks the visible text and metadata, and the version/date is shown to readers where relevant.

## Review cadence

- Recheck version-sensitive pages after an official update that could affect them.
- Recheck all indexed detailed pages at least every 90 days while the game changes materially.
- Log corrections with the date, the affected claim, and the reason.

## Corrections

When an unsupported or outdated assertion is found, remove or qualify it promptly, set the page to **Under source review** or **Stale**, keep it out of Sitemap, and record the correction in the audit ledger.
