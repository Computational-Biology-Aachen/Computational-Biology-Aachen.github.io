#!/usr/bin/env node
// Fails if a committed image exceeds a byte-size or pixel-dimension budget.
// Catches unresized camera/phone photos before they bloat the repo and every
// page that loads them - see the git history around 2026-08 for the class of
// bug this replaces manual review for (multi-MB news photos, avatar images
// committed at 3000-4600px).
//
// Usage:
//   node scripts/check-image-budget.mjs            # scan the whole repo
//   node scripts/check-image-budget.mjs <files...>  # scan just these files (pre-commit)

import { readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { imageSize } from "image-size";

const MAX_BYTES = 300 * 1024; // 300KB
const MAX_DIMENSION = 2000; // px, longest edge
const RASTER_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
]);
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "build",
  ".svelte-kit",
  "dist",
]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (RASTER_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

const argFiles = process.argv.slice(2);
const files = argFiles.length
  ? argFiles.filter((f) => RASTER_EXTENSIONS.has(extname(f).toLowerCase()))
  : walk(process.cwd());

let failed = false;

for (const file of files) {
  let size;
  try {
    size = statSync(file).size;
  } catch {
    continue; // file was deleted/renamed since the glob ran
  }

  const label = relative(process.cwd(), file);

  if (size > MAX_BYTES) {
    console.error(
      `✗ ${label}: ${(size / 1024).toFixed(0)}KB exceeds the ${MAX_BYTES / 1024}KB budget`,
    );
    failed = true;
  }

  try {
    const { width, height } = imageSize(file);
    const longest = Math.max(width ?? 0, height ?? 0);
    if (longest > MAX_DIMENSION) {
      console.error(
        `✗ ${label}: ${width}x${height} exceeds the ${MAX_DIMENSION}px longest-edge budget`,
      );
      failed = true;
    }
  } catch {
    // Not a format image-size can parse - skip the dimension check for it.
  }
}

if (failed) {
  console.error(
    "\nResize/compress the image(s) above before committing (e.g. `magick <file> -resize '2000x2000>' -quality 82 -strip <file>`).",
  );
  console.error(
    "If the size is genuinely necessary, bump the budget in scripts/check-image-budget.mjs.",
  );
  process.exit(1);
}
