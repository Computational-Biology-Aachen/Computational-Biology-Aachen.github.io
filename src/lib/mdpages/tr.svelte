<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<tr>
	{@render children()}
</tr>

<style>
	tr:hover {
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		background-color: lch(from var(--white) calc(l - 5) c h);
	}
</style>
