<script lang="ts">
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Section color="primary">
	<H1 color="light">{data.meta.title}</H1>
	<Text color="light">Published at {formatDate(data.meta.date)}</Text>
	<Text color="light">Author: {data.meta.author}</Text>
</Section>
<Section>
	<data.content />
</Section>
