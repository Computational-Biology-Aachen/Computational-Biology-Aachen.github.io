<script lang="ts">
	import type { Snippet } from 'svelte';
	import Box from './Box.svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<Box --box-color="var(--white)" --box-bg-color="var(--primary)">{@render children()}</Box>
