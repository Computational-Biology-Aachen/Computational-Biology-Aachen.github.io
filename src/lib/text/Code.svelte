<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<code>
	{@render children()}
</code>

<style>
	code {
		padding: 1rem;
	}
</style>
