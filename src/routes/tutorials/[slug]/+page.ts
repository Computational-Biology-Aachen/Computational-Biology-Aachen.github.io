import { error } from "@sveltejs/kit";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () =>
  Object.keys(import.meta.glob("/src/md/tutorials/*.md")).map((path) => ({
    slug: path.split("/").at(-1)!.replace(".md", ""),
  }));

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
