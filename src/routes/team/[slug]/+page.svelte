<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import ImageRound from '$lib/ImageRound.svelte';
	import Section from '$lib/Section.svelte';

	let { data: person } = $props();
	let img = `/people/${person.slug.split('/').at(-1)}.jpg`;
</script>

<svelte:head>
	<title>{person.name}</title>
	<meta property="og:type" content="article" />
</svelte:head>

<BoxHeading>
	<ImageRound path={img}></ImageRound>
	<hgroup>
		<h1>{person.name}</h1>
	</hgroup>
</BoxHeading>

<Section>{person.description}</Section>
