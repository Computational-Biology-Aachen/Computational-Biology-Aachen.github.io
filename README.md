# Computational Biology at RWTH Aachen

Main lab website. SvelteKit 5, adapter-static, mdsvex. Content lives in Markdown — no Svelte editing needed for team, news, or publications.

## Dev

```bash
npm install
npm run dev          # dev server on :5173
npm run build        # static build → build/
npm run check        # TypeScript + Svelte type checking
npm run lint         # Prettier + ESLint check
npm run format       # auto-format with Prettier
```

## Content editing

### Team profile

Edit or create `src/md/team/{your-name}.md`. Copy frontmatter from an existing profile and adjust. The `order` field controls gallery ordering by seniority:

| Value | Role             |
| ----- | ---------------- |
| 5     | Professor        |
| 4     | Post-Doc         |
| 3     | PhD student      |
| 2     | Master student   |
| 1     | Bachelor student |

### News post

Create a new `.md` file in `src/md/news/`. File name format: `YYYY-MM-DD-slug.md`. Copy frontmatter from an existing post.

### Publication

Edit `src/lib/publications.json`. Everything else derives automatically.
