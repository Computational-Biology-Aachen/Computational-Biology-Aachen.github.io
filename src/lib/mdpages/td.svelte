<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<td>
	{@render children()}
</td>

<style>
	td {
		padding: 0.5rem 1rem;
		border: 1px solid #333;
	}
</style>
