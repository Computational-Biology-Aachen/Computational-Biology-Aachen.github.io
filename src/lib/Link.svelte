<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		href,
		children
	}: {
		href: string;
		children: Snippet;
	} = $props();
</script>

<a {href}>{@render children()}</a>

<style>
	a {
		text-decoration-color: var(--underline);
		text-underline-offset: 0.125em;
	}

	a,
	:hover,
	:active,
	:focus {
		text-decoration: underline;
	}
</style>
