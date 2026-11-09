import { tutorials } from "#lib/site/content.js";
import { error } from "@sveltejs/kit";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () =>
  tutorials.map(({ slug }) => ({ slug }));

export async function load({ params }) {
  try {
    const post = await import(`../../../md/tutorials/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
