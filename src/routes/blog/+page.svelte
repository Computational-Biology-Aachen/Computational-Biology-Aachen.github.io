<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import BlogCard from '$lib/Card.svelte';
	import * as config from '$lib/config';
	import Link from '$lib/Link.svelte';
	import Section from '$lib/Section.svelte';
	import Text from '$lib/Text.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<BoxHeading>
	<hgroup>
		<h1>Blog</h1>
		<Text text="white">Probably mostly random ramblings.</Text>
	</hgroup>
</BoxHeading>
<Section>
	{#each data.posts as post}
		<BlogCard title={post.title}>
			<Text>{post.description}</Text>
			<Link href="/blog/{post.slug}">Read on</Link>
		</BlogCard>
	{/each}
</Section>
