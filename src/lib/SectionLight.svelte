<script lang="ts">
	import type { Snippet } from 'svelte';
	import Box from './Section.svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<Box --box-color="var(--primary)" --box-bg-color="var(--white)">{@render children()}</Box>
