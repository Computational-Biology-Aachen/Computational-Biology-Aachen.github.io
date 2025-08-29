<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		title
	}: {
		children: Snippet;
		title: string;
	} = $props();
</script>

<div>
	<h2>{title}</h2>
	{@render children()}
</div>

<style>
</style>
