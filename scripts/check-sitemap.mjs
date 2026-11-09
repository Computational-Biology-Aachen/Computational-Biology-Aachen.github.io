#!/usr/bin/env node
// Fails if build/sitemap.xml and the prerendered pages disagree. Run after
// `npm run build`. sitePages() in src/lib/site/content.ts is maintained by
// hand, so a new or renamed route has to be added there - this catches it.

import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const BUILD = join(process.cwd(), "build");

function htmlPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory())
      return entry.name === "_app" ? [] : htmlPages(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

let sitemap;
try {
  sitemap = readFileSync(join(BUILD, "sitemap.xml"), "utf8");
} catch {
  console.error(
    "Could not read build/sitemap.xml - run `npm run build` first.",
  );
  process.exit(1);
}

const listed = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) =>
    decodeURIComponent(new URL(loc).pathname),
  ),
);
const built = new Set(
  htmlPages(BUILD)
    .map(
      (file) =>
        `/${relative(BUILD, file)}`.replace(/(\/index)?\.html$/, "") || "/",
    )
    .filter((path) => path !== "/404"),
);

const missing = [...built].filter((path) => !listed.has(path));
const stale = [...listed].filter((path) => !built.has(path));
for (const path of missing)
  console.error(`✗ ${path} is prerendered but not in the sitemap`);
for (const path of stale)
  console.error(`✗ ${path} is in the sitemap but not prerendered`);

if (missing.length || stale.length) {
  console.error("Update sitePages() in src/lib/site/content.ts.");
  process.exit(1);
}
console.log(`✓ sitemap matches all ${built.size} prerendered pages`);
