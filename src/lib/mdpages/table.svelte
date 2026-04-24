<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<table>
	{@render children()}
</table>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
		overflow-x: auto;
		text-align: left;
		text-indent: 0;
		margin-bottom: 1rem;
		font-family: var(--font-family);
	}
</style>
