import { error } from "@sveltejs/kit";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () =>
  Object.keys(import.meta.glob("/src/md/team/*.md")).map((path) => ({
    slug: path.split("/").at(-1)!.replace(".md", ""),
  }));

export async function load({ params }) {
  try {
    const member = await import(`../../../md/team/${params.slug}.md`);

    return {
      content: member.default as string,
      slug: params.slug,
      meta: member.metadata as string,
    };
  } catch {
    error(404, `Could not find ${params.slug}`);
  }
}
