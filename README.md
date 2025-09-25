# Computational Biology at RWTH Aachen

## Editing your own data

- Your information that displayed on the "Team" page is located at `src/team/{your-name}/md`
- Copy the yaml frontmatter from another person and adjust accordingly
- Write the remainder as per usual

Notes: the "order" field is used to order people in the gallery by level of seniority

- 5: Professor
- 4: Post-Doc
- 3: PhD student
- 2: Master student
- 1: Bachelor student

## Creating a news entry

- Create a new `.md` file in `src/news`
- Copy the yaml frontmatter from another post and adjust accordingly
- Write the remainder as per usual


## Creating a new publication

- Edit the `src/lib/publications.json`
- Everything else will work automatically

## Dev setup

```bash
npm install
npm run dev -- --open
```
