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
		color: var(--secondary);
	}
</style>
