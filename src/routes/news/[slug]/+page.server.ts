import { news } from "#lib/site/content.js";
import type { EntryGenerator } from "./$types";

// Server-only so content.ts (every Markdown body) stays out of the client bundle.
export const entries: EntryGenerator = () => news.map(({ slug }) => ({ slug }));
