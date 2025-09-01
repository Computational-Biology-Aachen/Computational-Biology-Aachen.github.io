<script lang="ts">
	import * as config from '$lib/config';
	import '../app.css';

	import OneColumnLayout from '$lib/LayoutOneCol.svelte';
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
	<meta name="description" content={config.description} />
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
	<meta property="og:url" content={config.url} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Navbar>
	<li><a href="/">Home</a></li>
	<li><a href="/teaching">Teaching</a></li>
	<li><a href="/papers">Papers</a></li>
	<li><a href="/software">Software</a></li>
	<li><a href="/blog">Blog</a></li>
</Navbar>
<OneColumnLayout>
	{@render children()}
</OneColumnLayout>
