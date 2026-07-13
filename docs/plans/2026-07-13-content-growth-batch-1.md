# Subnautica 2 Content Growth — Batch 1 Implementation Plan

> **For Hermes:** Use `subagent-driven-development` to implement this plan task-by-task after source validation and owner approval.

**Goal:** Add three durable, Early-Access-safe English/Chinese guide hubs that target high-intent Subnautica 2 searches without publishing unverified game mechanics as facts.

**Architecture:** Reuse the existing Next.js App Router guide-page pattern and locale middleware. Each page must serve both `/guides/<slug>/` and `/zh-cn/guides/<slug>/`, expose localized metadata/canonical alternates, be linked from the guides hub, and be included in the generated sitemap. Claims about live-game mechanics must be either directly sourced/verified or labelled as unconfirmed and build-dependent.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind, Vitest, OpenNext Cloudflare.

---

## Scope and content guardrails

### Proposed guide hubs

1. `/guides/subnautica-2-map-biomes/`
   - Target intent: “Subnautica 2 map”, “Subnautica 2 biomes”.
   - Content: a versioned navigation/biome status hub. It must not present an unfinished Early Access map as final or invent coordinates.

2. `/guides/subnautica-2-blueprints-crafting-recipes/`
   - Target intent: “Subnautica 2 blueprints”, “Subnautica 2 crafting recipes”.
   - Content: a confirmed-blueprint tracker and crafting-reference structure. It must only list recipes/unlocks verified from official/game evidence; unavailable details are explicitly marked as unconfirmed.

3. `/guides/subnautica-2-walkthrough-progression/`
   - Target intent: “Subnautica 2 walkthrough”, “Subnautica 2 progression”.
   - Content: spoiler-controlled Early Access progression help with explicit build/version scope. It must not claim a finished story, ending, or objective sequence without reliable evidence.

### Required evidence policy

- Prefer official Unknown Worlds announcements, Steam store/patch notes, and direct current-build verification.
- Never copy prior Subnautica mechanics, names, map coordinates, recipes, or commands into Subnautica 2 as facts.
- Every uncertain or update-sensitive section must say it is Early-Access/build-dependent and include a last-checked date.
- Each page must contain useful user guidance even where specific facts are not yet confirmed; do not create thin placeholder pages.

## Task 1: Gather source-backed content briefs

**Objective:** Establish a citation/evidence brief before writing user-visible claims.

**Files:**
- Create: `docs/content-briefs/subnautica-2-map-biomes.md`
- Create: `docs/content-briefs/subnautica-2-blueprints-crafting-recipes.md`
- Create: `docs/content-briefs/subnautica-2-walkthrough-progression.md`

**Steps:**
1. Record each proposed H1, meta title, meta description, intent, and page outline.
2. List every factual gameplay claim alongside its official/current-build evidence URL and verification date.
3. Replace unsupported claims with conservative, explicitly labelled status language.
4. Perform an editorial review for thin/duplicated content before development begins.

**Verification:** No user-visible factual statement lacks evidence or an uncertainty label.

## Task 2: Write red tests for the new guide route contract

**Objective:** Define the page-discovery contract before adding pages.

**Files:**
- Create: `tests/ContentGrowthRoutes.test.ts`
- Modify: `src/lib/constants.ts`
- Modify: `src/app/sitemap.ts`

**Steps:**
1. Add failing tests asserting the three guide slugs are present in the guide registry.
2. Add failing tests asserting both English and `/zh-cn` URLs are produced by the sitemap route set.
3. Run the targeted test and observe the expected failure.

**Verification command:**
```bash
npm test -- --run tests/ContentGrowthRoutes.test.ts
```

## Task 3: Add minimal route registry and sitemap support

**Objective:** Make each approved guide discoverable and internally linked.

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/app/guides/page.tsx`
- Modify: `src/app/sitemap.ts`

**Steps:**
1. Add the three confirmed guide entries to both locale guide lists.
2. Add the three route paths to `sharedRoutes`, `priorityMap`, and `frequencyMap`.
3. Run the targeted tests and confirm they pass.
4. Run the complete test suite.

**Verification commands:**
```bash
npm test -- --run tests/ContentGrowthRoutes.test.ts
npm test
```

## Task 4: Implement the map-and-biomes hub

**Objective:** Publish an evidence-backed, Early-Access-safe map/biome reference page.

**Files:**
- Create: `src/app/guides/subnautica-2-map-biomes/page.tsx`
- Test: `tests/ContentGrowthRoutes.test.ts`

**Steps:**
1. Add a failing test for page metadata and versioned-status copy.
2. Implement localized metadata, `getAlternates`, scoped content, internal links, and FAQ.
3. Confirm no map coordinate or biome fact is unsupported.
4. Run targeted and complete tests.

## Task 5: Implement the blueprints-and-crafting hub

**Objective:** Publish a useful verified-reference structure without inventing recipes or unlock paths.

**Files:**
- Create: `src/app/guides/subnautica-2-blueprints-crafting-recipes/page.tsx`
- Test: `tests/ContentGrowthRoutes.test.ts`

**Steps:**
1. Add a failing test for canonical metadata and clearly labelled confirmation status.
2. Implement the localized page using only evidence-approved rows/claims.
3. Add internal links to resource and base-building pages.
4. Run targeted and complete tests.

## Task 6: Implement the walkthrough-and-progression hub

**Objective:** Publish a spoiler-controlled, version-scoped progression help page.

**Files:**
- Create: `src/app/guides/subnautica-2-walkthrough-progression/page.tsx`
- Test: `tests/ContentGrowthRoutes.test.ts`

**Steps:**
1. Add a failing test for metadata and Early-Access scope copy.
2. Implement the localized page with a clear “what to do next” framework and no unsupported story claims.
3. Link to beginner, resource, base-building, and multiplayer guides where relevant.
4. Run targeted and complete tests.

## Task 7: Production verification and release

**Objective:** Verify the worker artifact and live SEO contract.

**Files:**
- Modify only files approved above.

**Steps:**
1. Run `npm test`, `npm run lint`, `npm run build`, and `npx opennextjs-cloudflare build`.
2. Independently review the diff for unsupported claims, secret leakage, broken locale paths, and sitemap omissions.
3. Commit, push, and verify production responses for each English/Chinese URL, `sitemap.xml`, canonical metadata, and correct `lang` attributes.
4. Submit only the three English hub URLs and Chinese map page for indexing; let the Sitemap handle the rest.

**Release commands:**
```bash
npm test
npm run lint
npm run build
npx opennextjs-cloudflare build
git add src tests docs
git commit -m "feat: add first content growth guides"
git push origin master
```

## Acceptance criteria

- Three substantive bilingual guide hubs exist, are internally linked, and are in the Sitemap.
- No page asserts unsourced Early Access mechanics as settled facts.
- English and Chinese routes return 200 with correct canonical/locale metadata.
- Tests, lint, Next build, and OpenNext worker build pass.
- Production Sitemap is accepted by Google and Bing after the release.
