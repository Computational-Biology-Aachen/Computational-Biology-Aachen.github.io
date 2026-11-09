import * as config from "#lib/config.js";

// Kept apart from content.ts so client components can use it without pulling
// every Markdown body into their bundle.
export function absoluteUrl(path: string): string {
  return new URL(path, config.url).href;
}
