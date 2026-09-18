---
target: Homepage (src/lib/features/home/Home.svelte)
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/marvin/git/0-admin/pages/Computational-Biology-Aachen.github.io/src/lib/features/home/Home.svelte"
target_fingerprint: "sha256:4c24d011ba1ce6e0164f4fc02a0eb26827e83feffc49a1b85bf04e9d255061ed"
target_path: /home/marvin/git/0-admin/pages/Computational-Biology-Aachen.github.io/src/lib/features/home/Home.svelte
timestamp: 2026-09-17T20-08-13Z
slug: src-lib-features-home-home-svelte
---

Method: dual-agent (A: design-review subagent · B: detector/browser subagent)

## Design Health Score

| #         | Heuristic                       | Score     | Key Issue                                                                                                                                                                            |
| --------- | ------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1         | Visibility of System Status     | 3         | No loading/error state needed (static page is fine), but unsized hero/group images (no width/height) risk visible layout shift on load                                               |
| 2         | Match System / Real World       | 2         | Mission copy is generic sustainability boilerplate, not the lab's actual mechanistic-modeling method; Teaching section lists real course codes but every link points nowhere related |
| 3         | User Control and Freedom        | 3         | Nav/back works fine; logo marquee auto-scrolls with hover-only pause, no touch/keyboard pause control                                                                                |
| 4         | Consistency and Standards       | 2         | Every section heading renders as `<h1>` (7+ on one page); homepage section order doesn't match top-nav order                                                                         |
| 5         | Error Prevention                | 3         | Mostly n/a (no forms), but 5 dead-end Teaching links are an unguarded content error that shipped to production                                                                       |
| 6         | Recognition Rather Than Recall  | 3         | Headings/labels are plain and recognizable; section-number badges are set as props but never rendered (dead, harmless today)                                                         |
| 7         | Flexibility and Efficiency      | n/a       | Persuade-mode marketing surface — no power-user path expected                                                                                                                        |
| 8         | Aesthetic and Minimalist Design | 3         | Alternating light/dark section rhythm is clean and restrained; undercut by flat heading structure and a hand-maintained "latest publications" list                                   |
| 9         | Error Recovery                  | n/a       | No user-facing errors exist on this static surface                                                                                                                                   |
| 10        | Help and Documentation          | n/a       | Marketing/landing surface — not applicable                                                                                                                                           |
| **Total** |                                 | **19/28** | **Acceptable (68%)**                                                                                                                                                                 |

Heuristics 7, 9, 10 scored n/a (Persuade-mode surface with no forms/errors); applicable max renormalized from 40 to 28.

## Design Specificity Verdict

**LLM assessment**: Mixed. The "community resources" section (MxlPy/MxlBricks/GreenSloth/ComPhot cards with concrete GitHub links and functional taglines) and the publications section genuinely ground the page in this lab's differentiated mechanistic-modeling method — a generic template couldn't produce that. But the hero and mission copy carry almost none of it: "re-imagining photosynthesis for the future of sustainable agriculture and green innovation... uniting mathematics, biology, and global sustainability... shaping resilient crops, smart cities, and a climate-ready future" is interchangeable boilerplate that could sit on nearly any plant-science or sustainability lab's homepage. The words "mechanistic," "ODE," or "model" (in the modeling sense) never appear in the mission paragraph — the thing PRODUCT.md calls the lab's defining, differentiated method is asserted nowhere near the top of the page and only becomes concrete four scroll-sections down.

**Deterministic scan**: The mechanical Impeccable detector ran clean (exit 0, zero findings) against both `src/lib/features/home/Home.svelte` and the global style/font files (`src/app.css`, `src/app.html`) that feed it. No mechanical design-system drift, contrast, broken-image, or gradient/glow violations were found on this surface. This is a genuinely clean deterministic result, not a skipped scan — it means the issues below are all judgment-level (copy, IA, accessibility structure, content freshness), not the class of mechanical defects the detector is built to catch.

**Visual overlays**: Not available. No browser automation tool was exposed to either assessment in this session, so no live screenshot or console-overlay evidence could be gathered. Both assessments worked from source, SSR-rendered HTML, and the design package's component sources instead. Layout claims below that depend on true pixel rendering (e.g. possible hero-image overlap on narrow viewports) are flagged as inferred, not confirmed — verify visually before treating them as settled.

## Overall Impression

The homepage's structural bones (SSR-rendered, data-driven news feed, shared design-package components, alternating section rhythm) are solid and the detector found zero mechanical defects. But the page currently undersells the one thing PRODUCT.md says should differentiate this lab: the mission copy at the top reads as generic academic-sustainability boilerplate, the strongest evidence of mechanistic-modeling identity is buried four sections down, and the "latest publications" block is hand-typed rather than pulling from the bot-maintained `publications.json` — which means it will silently go stale as the actual pipeline moves on without it. The single biggest opportunity: move a concrete, specific claim about the mechanistic-modeling method into the hero/mission, and make the credibility surfaces (publications) auto-derive from the same data source the rest of the site already trusts.

## What's Working

1. **The "community resources" section is the page's best design-specificity move.** Four software cards (MxlPy, MxlBricks, GreenSloth, ComPhot) with real GitHub links and one-line functional taglines make the mechanistic-modeling identity tangible instead of asserted — exactly the "show, don't tell" PRODUCT.md principle in action.
2. **Alternating light/dark section banding** creates clean visual rhythm and lets the RWTH petrol/orange/dark palette do real hierarchy work without extra decoration — restrained and on-brand with the shared design system.
3. **The news loader (`+page.ts`) is a well-built, principle-aligned data pipeline**: it globs Markdown, filters on `published`, sorts by date, slices to 3, and degrades gracefully to a clean "check out our news" link when empty — a real instance of "content-as-Markdown is the interface," in contrast to the hardcoded publications block below.

## Priority Issues

**[P0] All 5 Teaching links point to `/` instead of real destinations**

- **Why it matters**: For a prospective student — the primary persona PRODUCT.md names — these read as real course listings (PhoSA, Bioscience Application Subject II, Bioinformatics, Ethics in Biosciences, Data Science) and click straight back to the homepage itself. That's a dead-end promise for exactly the audience the site exists to convince, and it undercuts the "active, credible lab" impression the whole page is trying to build.
- **Fix**: Link each course to its real course/registration page or a `/teaching#slug` anchor; remove the links entirely if no target exists yet rather than pointing them at `/`.
- **Suggested command**: `/impeccable harden`

**[P1] "Latest publications" is hardcoded in `Home.svelte`, not sourced from `publications.json`**

- **Why it matters**: The three publication cards are hand-typed (two more sit commented out in source), while `publications.json` is the bot-maintained, 40-entry source of truth per PRODUCT.md's own architecture. This directly breaks product principle #1 ("content-as-Markdown/JSON is the interface") — `publications-watch` can add a real new paper and the homepage will never reflect it without a manual code edit and redeploy, which over time becomes evidence of inactivity, the opposite of the site's stated success criterion.
- **Fix**: Derive the top-N publications shown on the homepage from `publications.json` sorted by date, the same way `+page.ts` already derives news from Markdown.
- **Suggested command**: `/impeccable harden`

**[P1] Flat heading hierarchy: 7+ `<h1>` elements on one page**

- **Why it matters**: `BoxHeadingMain` unconditionally renders an `<h1>` for every section (mission, team, news, teaching, publications, resources, partners) with no nesting underneath. Confirmed in both source and SSR HTML. For a screen-reader user navigating by heading level — a primary discovery method — the page presents as eight unrelated top-level documents rather than one structured page. This is a shared-component defect, so it likely affects every page that reuses `BoxHeadingMain` more than once, not just the homepage.
- **Fix**: Give `BoxHeadingMain` a `level` prop (default `h2`) so only the true page title renders as `<h1>`.
- **Suggested command**: `/impeccable audit`

**[P2] Partner-logo bar exceeds its own component's comfort threshold and auto-scrolls with no accessible pause**

- **Why it matters**: `RowImgScrolling`/`LogoBar` defaults to a 5-logo static threshold before switching to an infinite marquee; the homepage passes 7, forcing marquee mode (confirmed in SSR output). Pause is hover-only, with no visible/keyboard/touch pause control and no `prefers-reduced-motion` guard. For a motion-sensitive or touch-device evaluator near the bottom of a credibility-judging page, this is unnecessary friction right before the page ends.
- **Fix**: Trim to ≤5 logos to stay in static mode, or add a visible pause toggle plus a `prefers-reduced-motion` media query.
- **Suggested command**: `/impeccable audit`

**[P3] Copy-pasted alt text: BioSC logo mislabeled "ccls logo"**

- **Why it matters**: `alt: "ccls logo"` is applied to the BioSC partner logo and renders verbatim in SSR HTML. Small but concrete — a screen-reader user or anyone hitting a failed image load is told this is the wrong organization's logo.
- **Fix**: Correct the alt text to `"biosc logo"`.
- **Suggested command**: `/impeccable audit`

## Persona Red Flags

**Jordan (First-Timer / prospective student)**: Lands on generic mission copy that doesn't yet signal "this lab does something distinctive," then — right when motivated to act on teaching/internship interest — hits five dead links and an unlinked "contact Prof. Matuszyńska directly" instruction with no actual contact mechanism anywhere on the page. Jordan is told what to do without being given the means to do it.

**Sam (Accessibility)**: The flat multi-`<h1>` structure breaks heading-based page navigation across the entire homepage; the auto-scrolling logo marquee has no non-hover pause path and no reduced-motion accommodation.

**Casey (Mobile)**: Two risks inferable from CSS but not confirmed without a screenshot: the hero logo image (`position: absolute; max-width: 30rem`, no viewport-relative cap) sits over independently-centered hero text and could overlap the heading or force horizontal scroll on narrow viewports; unsized hero/group images (no explicit width/height) risk layout shift on slower mobile connections. Both should be verified visually.

## Minor Observations

- `BoxHeadingMain`'s `n` prop (section numbers "01"–"07") is destructured but never rendered — currently harmless, but the source order is already out of sequence (News is numbered "07" but appears third), so it's a landmine if that prop is ever wired up later without renumbering.
- Author-name lists in the hardcoded publication cards have stray spaces before commas ("Tim Nies **,** El-Hadji Malick Cisse **,** Anna Matuszyńska") — a small copy-quality smell consistent with hand-typed rather than data-derived content (see the P1 above).
- Two commented-out publication entries remain in the source rather than being removed — not user-visible, but reinforces that this section isn't treated as living data.
- Homepage section order (Mission → Team → News → Teaching → Publications → Resources → Partners) doesn't match the top-nav order (Home → Team → Teaching → Papers → Resources → Tutorials → Events → News) — a subtle mismatch between what the nav says matters and what the homepage leads with.

## Questions to Consider

1. If a funder skims only the hero and mission paragraph before deciding whether to keep scrolling, why does neither mention modeling, ODEs, or mechanistic methods at all — should the differentiator move from section six to the first screen?
2. The news pipeline is fully data-driven and the publications section isn't — was that a deliberate scope decision, or did the homepage's publications block simply never get migrated when `publications.json` was introduced?
3. Given prospective students are a named primary persona, why is "contact us to apply/intern" copy present but not a single mailto/contact link anywhere on the homepage?
