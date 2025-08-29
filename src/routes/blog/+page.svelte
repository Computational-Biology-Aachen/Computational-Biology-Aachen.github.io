<script lang="ts">
	import DarkBox from '$lib/BoxDark.svelte';
	import LightBox from '$lib/BoxLight.svelte';
	import BlogCard from '$lib/Card.svelte';
	import * as config from '$lib/config';
	import P from '$lib/Text.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<DarkBox>
	<hgroup>
		<h1>Blog</h1>
		<P text="white">Probably mostly random ramblings.</P>
	</hgroup>
</DarkBox>
<LightBox>
	{#each data.posts as post}
		<BlogCard title={post.title}>
			<p class="description">{post.description}</p>
			<a href="/blog/{post.slug}">Read on</a>
		</BlogCard>
	{/each}
</LightBox>
