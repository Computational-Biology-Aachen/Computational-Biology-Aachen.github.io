<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<hr />

<style>
	hr {
		margin-bottom: 1rem;
	}
</style>
