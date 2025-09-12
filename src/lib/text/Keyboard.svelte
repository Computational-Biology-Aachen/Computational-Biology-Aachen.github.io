<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<kdb>
	{@render children()}
</kdb>

<style>
	kdb {
		font-family: monospace;
		font-size: 0.875em;
		padding: 0.375rem;
		vertical-align: baseline;
	}
</style>
