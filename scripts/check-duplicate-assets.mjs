#!/usr/bin/env node
// Fails if two committed image files are byte-identical. Catches the same
// photo/logo getting copied into both static/ and src/lib/assets/ (or
// re-saved under a second name) instead of being referenced once - dead
// weight that just inflates the repo and the build.

import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { extname, join, relative } from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
]);
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "build",
  ".svelte-kit",
  "dist",
]);
const ROOTS = ["static", "src"];

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out; // root doesn't exist in this project
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

const files = ROOTS.flatMap((root) => walk(join(process.cwd(), root)));

const byHash = new Map();
for (const file of files) {
  const hash = createHash("sha256").update(readFileSync(file)).digest("hex");
  const group = byHash.get(hash) ?? [];
  group.push(relative(process.cwd(), file));
  byHash.set(hash, group);
}

let failed = false;
for (const group of byHash.values()) {
  if (group.length > 1) {
    failed = true;
    console.error(`✗ identical file committed in ${group.length} places:`);
    for (const path of group) console.error(`    ${path}`);
  }
}

if (failed) {
  console.error(
    "\nKeep one copy and update references, or delete whichever copy is unused.",
  );
  process.exit(1);
}
