<script lang="ts">
	import * as config from '$lib/config';
	import '../app.css';

	import Nav from '$lib/nav/Nav.svelte';
	import NavItem from '$lib/nav/NavItem.svelte';

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

<Nav>
	<NavItem href="/" name="Home" />
	<NavItem href="/team" name="Team" />
	<NavItem href="/teaching" name="Teaching" />
	<NavItem href="/papers" name="Papers" />
	<NavItem href="/software" name="Resources" />
	<NavItem href="/blog" name="Blog" />
</Nav>

{@render children()}
