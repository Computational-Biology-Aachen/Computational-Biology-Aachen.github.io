<script lang="ts">
	import HeaderPerson from '$lib/sections/HeaderPerson.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H2 from '$lib/text/H2.svelte';

	let { data: person } = $props();
	let img = `/people/${person.slug.split('/').at(-1)}.jpg`;
</script>

<svelte:head>
	<title>{person.name}</title>
	<meta property="og:type" content="article" />
</svelte:head>

<HeaderPerson name={person.name} {img}></HeaderPerson>

<Section>
	<H2>About me</H2>
	{person.description}
</Section>
