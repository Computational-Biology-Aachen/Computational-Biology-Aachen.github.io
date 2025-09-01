<script lang="ts">
	import DarkBox from '$lib/SectionDark.svelte';
	import LightBox from '$lib/SectionLight.svelte';
	import P from '$lib/Text.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<DarkBox>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<P text="white">Published at {formatDate(data.meta.date)}</P>
	</hgroup>
</DarkBox>
<LightBox>
	<data.content />
</LightBox>
