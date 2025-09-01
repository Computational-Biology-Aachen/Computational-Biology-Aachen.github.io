<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import Section from '$lib/Section.svelte';

	let { data: person } = $props();
</script>

<svelte:head>
	<title>{person.name}</title>
	<meta property="og:type" content="article" />
</svelte:head>

<BoxHeading>
	<hgroup>
		<h1>{person.name}</h1>
	</hgroup>
</BoxHeading>
<Section>{person.description}</Section>
