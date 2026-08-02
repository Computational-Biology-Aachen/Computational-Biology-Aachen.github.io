#!/usr/bin/env node
// Fails if any client JS chunk in the built output exceeds a size budget.
// Run after `npm run build`. Catches data that should be lazy/per-route
// getting hoisted into one shared chunk that every page then preloads -
// see the greensloth model-data bundling fix from 2026-08 for the shape of
// bug this guards against.

import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 500 * 1024; // 500KB
const CHUNKS_DIR = join(process.cwd(), "build", "_app", "immutable", "chunks");

let entries;
try {
  entries = readdirSync(CHUNKS_DIR);
} catch {
  console.error(`Could not read ${CHUNKS_DIR} - run \`npm run build\` first.`);
  process.exit(1);
}

let failed = false;
for (const name of entries) {
  if (!name.endsWith(".js")) continue;
  const path = join(CHUNKS_DIR, name);
  const { size } = statSync(path);
  if (size > MAX_BYTES) {
    console.error(
      `✗ build/_app/immutable/chunks/${name}: ${(size / 1024).toFixed(0)}KB exceeds the ${MAX_BYTES / 1024}KB chunk budget`,
    );
    failed = true;
  }
}

if (failed) {
  console.error(
    "\nA chunk this large is usually data or a dependency that got pulled into a shared chunk instead of\n" +
      "being lazy-loaded per-route (e.g. an eager `import.meta.glob` reused by an unrelated page). Check\n" +
      "which pages `grep -l <chunk-name> build/**/*.html` actually preload it and whether that's intended.\n" +
      "If the size is genuinely necessary, bump the budget in scripts/check-chunk-budget.mjs.",
  );
  process.exit(1);
}
