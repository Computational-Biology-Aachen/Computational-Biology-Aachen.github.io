---
name: Computational-Biology-Aachen.github.io
description: Local deviation record for the CPBL lab site — the shared design package is the canonical visual system
---

# Design System: Computational-Biology-Aachen.github.io

## Overview

This site has no visual system of its own. Every color, typeface, spacing value, and component comes from `@computational-biology-aachen/design` (`pkg-js/design` in the meta-repo), imported via `@import "@computational-biology-aachen/design/tokens.css";` in `src/app.css` and the package's Svelte components. **That package's own `DESIGN.md` ("The Journal Figure") is the canonical spec** for Colors, Layout, Elevation & Depth, and Shapes — this file does not restate them because this site has made zero local additions or overrides in those areas.

This file exists only to record two places where the live code has drifted from that canonical spec. Both are confirmed as unintentional drift, not sanctioned local patterns, and should be migrated back to the shared system when the surrounding code is next touched — not treated as precedent for further one-off styling.

**Key Characteristics:**

- No local color, spacing, radius, or layout tokens; `app.css` only sets `html`/`body` base properties from imported CSS variables plus a `.katex-display` margin reset.
- Two confirmed drifts from the upstream spec (below), both flagged for migration rather than documented as intentional exceptions.
- No other local component library: all `Card`, `Section`, `Button`, `Text`, etc. usage across `src/lib/features/*` is the shared package's components used as-is.

## Typography

Inherits Space Grotesk as the sole typeface from the upstream system (see its **Bold-Heading Rule** and the "no second display face" Don't). One local violation:

- **Homepage hero drift:** `src/lib/features/home/Home.svelte`'s `.hero-line` (the "The Matuszyńska Lab / Computational Biology / RWTH Aachen" hero text) is set in **Quicksand** (`font-family: "Quicksand", sans-serif`), loaded specifically for this via a second Google Fonts family string in `src/app.html`. This directly contradicts the upstream Don't ("Don't introduce a second display typeface — Space Grotesk carries every role in this system"). Confirmed as unintentional drift, not a sanctioned exception.

### Named Rules

**The One-Typeface Migration Rule.** The Quicksand hero treatment in `Home.svelte` is tech debt, not a pattern. Don't extend Quicksand to any other heading or component. When `Home.svelte` is next touched, migrate `.hero-line` to Space Grotesk (likely `H1`/display-weight styling from the shared package) and drop the Quicksand Google Fonts family from `src/app.html`.

## Components

### Pagination Buttons (local drift — migrate to shared `Button`)

`src/lib/features/news/News.svelte` and `src/lib/features/tutorials/Tutorials.svelte` each hand-roll a raw `<button>` for prev/next pagination instead of using the shared package's `Button` component:

- **Shape:** `border-radius: 0.25rem` — sharper than the shared `Button`'s `--radius-md` (8px).
- **Color:** News uses `var(--color-text)` as background/border (with `var(--color-bg)` text); Tutorials uses `var(--color-primary)` instead — the two local copies aren't even consistent with each other.
- **Padding/type:** `0.75rem 2rem`, `font-size: 1rem` — doesn't match the shared `Button`'s label typography or `--space-2 --space-6` padding.
- **Hover/active:** `transform: scale(1.05)` + inset shadow on hover, `scale(1)` + a different inset shadow on active — a bespoke interaction the shared `Button` doesn't have.
- **Disabled:** border/background swap to `var(--color-surface)` (News) or `var(--color-text)` (Tutorials) — again inconsistent between the two copies.

Confirmed as drift to be moved into the shared design package's pattern, not a local component worth preserving. When touched, replace both with the shared `Button` component (its existing `disabled`/`loading` states already cover pagination's needs) rather than continuing to maintain two diverging hand-rolled copies.

## Do's and Don'ts

### Do:

- **Do** treat `pkg-js/design`'s `DESIGN.md` as the canonical source for colors, layout, elevation, shapes, and every component other than the two drifts below — this file only records exceptions to it.
- **Do** migrate the `News.svelte`/`Tutorials.svelte` pagination buttons to the shared `Button` component the next time either file is touched, rather than patching them in place.
- **Do** migrate `Home.svelte`'s `.hero-line` off Quicksand to Space Grotesk (and remove the now-unneeded Quicksand `<link>` in `src/app.html`) the next time the hero is touched.

### Don't:

- **Don't** copy the Quicksand hero treatment to any other component — it is drift being phased out, not an approved second display face.
- **Don't** copy the hand-rolled pagination button styles to any new component — use the shared `Button` directly for any new prev/next or action-button UI.
- **Don't** re-derive colors, spacing, or radius values locally for this site; import them from `@computational-biology-aachen/design/tokens.css` as `app.css` already does.
