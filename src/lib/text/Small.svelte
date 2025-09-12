<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<small>
	{@render children()}
</small>

<style>
	small {
		font-size: 0.875rem;
	}
</style>
