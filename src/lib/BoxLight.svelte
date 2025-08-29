<script lang="ts">
	import type { Snippet } from 'svelte';
	import Box from './Box.svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<Box --box-color="var(--primary)" --box-bg-color="var(--white)">{@render children()}</Box>
