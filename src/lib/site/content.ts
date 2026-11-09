// Build-time view of the site's Markdown content and publications, shared by
// the machine-readable endpoints (sitemap, RSS, llms.txt) so they always list
// exactly what the pages render.
import publicationsJson from "#lib/publications.json";
import { absoluteUrl } from "./url.js";

export { absoluteUrl };

export type Article = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author?: string;
  published: boolean;
  body: string;
};

export type Person = {
  slug: string;
  name: string;
  order: number;
  mail?: string | null;
  github?: string | null;
  gitlab?: string | null;
  website?: string | null;
  orcid?: string | null;
  body: string;
};

export type Publication = {
  title: string;
  date: string;
  doi: string;
  authors: string[];
  preprint?: boolean;
};

type Glob = Record<string, unknown>;

const weeklySummary = /^\d{4}-\d{2}-\d{2}-weekly-summary$/;

function slugOf(path: string): string {
  return path.split("/").at(-1)!.replace(/\.md$/, "");
}

// Front-matter and embedded <script>/<style> blocks are page plumbing, not content.
function stripMarkdown(raw: string): string {
  return raw
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/g, "")
    .trim();
}

function collect<T>(
  modules: Glob,
  raws: Glob,
): (T & { slug: string; body: string })[] {
  return Object.entries(modules).map(([path, module]) => ({
    ...(module as { metadata: T }).metadata,
    slug: slugOf(path),
    body: stripMarkdown(raws[path] as string),
  }));
}

const byDateDesc = (a: { date: string }, b: { date: string }) =>
  b.date.localeCompare(a.date);

export const news: Article[] = collect<Omit<Article, "slug" | "body">>(
  import.meta.glob("/src/md/news/*.md", { eager: true }),
  import.meta.glob("/src/md/news/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
)
  .filter((post) => post.published)
  .sort(byDateDesc);

export const isWeeklySummary = (post: Article) => weeklySummary.test(post.slug);

export const tutorials: Article[] = collect<Omit<Article, "slug" | "body">>(
  import.meta.glob("/src/md/tutorials/*.md", { eager: true }),
  import.meta.glob("/src/md/tutorials/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
)
  .filter((tutorial) => tutorial.published)
  .sort(byDateDesc);

export const team: Person[] = collect<Omit<Person, "slug" | "body">>(
  import.meta.glob("/src/md/team/*.md", { eager: true }),
  import.meta.glob("/src/md/team/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
).sort((a, b) => b.order - a.order);

export const alumni: Person[] = collect<Omit<Person, "slug" | "body">>(
  import.meta.glob("/src/md/team-alumni/*.md", { eager: true }),
  import.meta.glob("/src/md/team-alumni/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  }),
).sort((a, b) => a.name.localeCompare(b.name));

export const publications: Publication[] = (publicationsJson as Publication[])
  .filter((publication) => publication.doi)
  .sort(byDateDesc);

export const groupLeader = team.find(
  (person) => person.slug === "anna-matuszyńska",
);

export type SitePage = { path: string; lastmod?: string };

const newest = (items: { date: string }[]) => items[0]?.date;

// Every prerendered page. scripts/check-sitemap.mjs asserts this matches the
// build output exactly, so a new route has to be added here.
export function sitePages(): SitePage[] {
  const latestNews = newest(news.filter((post) => !isWeeklySummary(post)));
  const latestPaper = newest(publications);
  return [
    { path: "/", lastmod: [newest(news), latestPaper].sort().at(-1) },
    { path: "/team" },
    { path: "/teaching" },
    { path: "/papers", lastmod: latestPaper },
    { path: "/software" },
    { path: "/events" },
    { path: "/tutorials", lastmod: newest(tutorials) },
    { path: "/news", lastmod: latestNews },
    ...team.map((person) => ({ path: `/team/${person.slug}` })),
    ...tutorials.map((t) => ({
      path: `/tutorials/${t.slug}`,
      lastmod: t.date,
    })),
    ...news.map((post) => ({ path: `/news/${post.slug}`, lastmod: post.date })),
  ];
}
