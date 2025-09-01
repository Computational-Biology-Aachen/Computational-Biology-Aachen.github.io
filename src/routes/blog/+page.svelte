<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import BlogCard from '$lib/Card.svelte';
	import * as config from '$lib/config';
	import LightBox from '$lib/SectionLight.svelte';
	import P from '$lib/Text.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<BoxHeading>
	<hgroup>
		<h1>Blog</h1>
		<P text="white">Probably mostly random ramblings.</P>
	</hgroup>
</BoxHeading>
<LightBox>
	{#each data.posts as post}
		<BlogCard title={post.title}>
			<p class="description">{post.description}</p>
			<a href="/blog/{post.slug}">Read on</a>
		</BlogCard>
	{/each}
</LightBox>
