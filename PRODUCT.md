# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: prospective students/postdocs evaluating the lab before applying, and collaborators/funders assessing research credibility for potential collaboration or funding. Their job on the site is browsing team, publications, software, and news to judge whether the lab is active, credible, and worth applying to or partnering with.

## Product Purpose

The main public website for CPBL (Computational and Plant Biology Lab): team profiles, publications, software, news, events, teaching, and tutorials in one place. Success is an evaluator (applicant, collaborator, funder) coming away convinced the lab is active and rigorous, and being able to act on it (apply, contact, cite, collaborate).

## Positioning

Mechanistic ODE modeling of plant metabolism and photosynthesis — the mxl/MxlPy tooling family — is the lab's defining method. This is a mechanism a neighboring computational-biology lab's site could not truthfully claim; it should read through the team/publications/software content, not just be asserted.

## Operating Context

- Content lives in Markdown, not Svelte: `src/md/team/{name}.md`, `src/md/team-alumni/`, `src/md/news/{date-slug}.md`, `src/md/tutorials/{slug}.md`, and `src/lib/publications.json` (all other page logic auto-derives from these).
- `src/lib/publications.json` and `src/md/news/` are kept current by cron bots in the parent meta-repo (`bots/citation-watch`, `bots/weekly-summary` push straight to main; `bots/publications-watch` opens a PR instead, since distinguishing a real new lab publication from an incidental co-authorship isn't decidable from OpenAlex metadata alone).
- Static site: SvelteKit 5 (runes) + `adapter-static` + mdsvex, deployed to GitHub Pages. No backend, no server-rendered routes, no forms with server-side handling.
- Styling and shared UI (tokens + ~100 Svelte components) come from `@computational-biology-aachen/design`, a git-dependency npm package pulled from a sibling repo in the same meta-repo (`pkg-js/design`), re-pinned lab-wide by the meta-repo's `sync.sh`.

## Capabilities and Constraints

- All content changes happen as Markdown/JSON edits and commits — no CMS, no admin UI. Team/news/tutorial pages are meant to be editable by lab members without touching Svelte.
- Any new page/feature must fit the existing "edit Markdown or JSON, everything else derives" model rather than introducing a parallel content mechanism.
- No custom design system of its own: this site consumes `@computational-biology-aachen/design`'s tokens and components as its visual authority rather than defining independent styling. The shared package's own `PRODUCT.md`/`DESIGN.md` (at `pkg-js/design/` in the meta-repo) is the upstream source of truth for the visual system — this site's own future DESIGN.md should reference and inherit from it rather than duplicate or diverge from it.
- Since it is a static GitHub Pages build, any feature requiring persistent server state, auth, or dynamic server logic is out of scope as currently deployed.

## Brand Commitments

Visual identity is inherited wholesale from `@computational-biology-aachen/design`: RWTH petrol (`--color-primary`, `rgb(0, 97, 101)`) as the dominant working color, RWTH orange (`--color-accent`, `rgb(246, 168, 0)`) as a single rare highlight, Space Grotesk as the sole typeface. Held loosely, not as an official RWTH corporate-design compliance obligation — see the design package's own `DESIGN.md` for the full system (palette rules, motion, typography) that this site should follow rather than restate.

## Evidence on Hand

- 7 active team profiles (`src/md/team/`) plus an alumni set (`src/md/team-alumni/`).
- 86 news posts (`src/md/news/`).
- 6 tutorials (`src/md/tutorials/`).
- `src/lib/publications.json`, auto-maintained publication list with title/date/DOI/authors/preprint status.
- Routes already covering: news, papers, tutorials, events, team, teaching, software.

## Product Principles

1. Content-as-Markdown/JSON is the interface: any new capability should extend what a lab member can express by editing a `.md` file or `publications.json`, not require them to write Svelte.
2. The site's job is to make the lab look credible and active to evaluators judging it from outside — applicants, collaborators, funders — not just to document internal facts.
3. Mechanistic modeling of plant systems is the lab's specific identity; content and framing should let that come through concretely (methods, tools, publications) rather than reading as a generic computational-biology lab.
4. Visual identity is delegated, not owned: this site should draw on `@computational-biology-aachen/design` rather than accumulate one-off styling that only this site has.
5. The bot-driven content pipeline (citation-watch, weekly-summary, publications-watch) is a real constraint: changes to `publications.json` shape or news frontmatter must stay compatible with what those bots write.
