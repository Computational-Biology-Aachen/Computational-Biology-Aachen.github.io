<script lang="ts">
	import Section from '$lib/Section.svelte';
	import P from '$lib/Text.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Section light={false}>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<P text="white">Published at {formatDate(data.meta.date)}</P>
	</hgroup>
</Section>
<Section>
	<data.content />
</Section>
