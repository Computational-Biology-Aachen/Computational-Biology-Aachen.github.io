<script lang="ts">
	import * as config from '$lib/config';
	import '../app.css';

	import OneColumnLayout from '$lib/LayoutOneCol.svelte';
	import Link from '$lib/Link.svelte';
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
	<li><Link href="/">Home</Link></li>
	<li><Link href="/teaching">Teaching</Link></li>
	<li><Link href="/papers">Papers</Link></li>
	<li><Link href="/software">Software</Link></li>
	<li><Link href="/blog">Blog</Link></li>
</Navbar>
<OneColumnLayout>
	{@render children()}
</OneColumnLayout>
