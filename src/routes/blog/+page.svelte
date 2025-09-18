<script lang="ts">
	import Card from '$lib/cards/Card.svelte';
	import * as config from '$lib/config';
	import Link from '$lib/Link.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Header>
	<H1 color="light">News</H1>
</Header>
<Section>
	{#each data.posts as post}
		<Card format="full">
			<H2>{post.title}</H2>
			<Text>{post.description}</Text>
			<Link href="/blog/{post.slug}">Read on</Link>
		</Card>
	{/each}
</Section>
