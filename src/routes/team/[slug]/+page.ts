import { team } from "#lib/site/content.js";
import { error } from "@sveltejs/kit";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () => team.map(({ slug }) => ({ slug }));

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
