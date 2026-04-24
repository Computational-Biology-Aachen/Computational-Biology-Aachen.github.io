<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<li>
	{@render children()}
</li>

<style>
	li {
		list-style-position: inside;
	}
</style>
