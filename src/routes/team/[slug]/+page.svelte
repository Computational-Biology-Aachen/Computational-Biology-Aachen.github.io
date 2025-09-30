<script lang="ts">
	import HeaderPerson from '$lib/sections/HeaderPerson.svelte';
	import Section from '$lib/sections/Section.svelte';
	import type { Member } from '$lib/types';

	const images = import.meta.glob(['$lib/assets/people/*'], { eager: true, as: 'url' });

	let { data } = $props();
	let person: Member = data.meta;

	let filename = `/people/${data.slug.split('/').at(-1)}.jpg`;
	let img = images[`/src/lib/assets${filename}`];
</script>

<svelte:head>
	<title>{person.name}</title>
	<meta property="og:type" content="article" />
</svelte:head>

<HeaderPerson
	name={person.name}
	{img}
	mail={person.mail}
	github={person.github}
	gitlab={person.gitlab}
	orcid={person.orcid}
	website={person.website}
></HeaderPerson>

<Section><data.content /></Section>
