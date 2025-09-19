import team from '$lib/team.json';
import { error } from '@sveltejs/kit';

let result = new Map(team.map(i => [i.slug, i]));

export async function load({ params }) {
    let slug = params.slug.split("/").at(-1);

    // Lead json
    if (typeof slug === "undefined") {
        error(404, `Could not find ${params.slug}`)

    }
    let person = result.get(slug);
    if (typeof person === "undefined") {
        error(404, `Could not find ${params.slug}`)

    }

    const post = await import(`../../../team/${params.slug}.md`)

    let md = {
        content: post.default,
        meta: post.metadata
    }
    return { person, md }

}




