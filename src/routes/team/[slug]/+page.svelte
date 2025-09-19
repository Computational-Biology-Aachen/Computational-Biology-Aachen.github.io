<script lang="ts">
	import HeaderPerson from '$lib/sections/HeaderPerson.svelte';
	import Section from '$lib/sections/Section.svelte';

	let { data } = $props();
	let person = data.person;
	let md = data.md;
	let img = `/people/${person.slug.split('/').at(-1)}.jpg`;
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

<Section><md.content /></Section>
