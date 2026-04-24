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
		color: white;
		/* background-color: var(--primary); */
		background-color: rgb(from var(--primary) r g b / 0.8);
		/* background-color: lch(from var(--white) calc(l - 10) c h); */
		border-radius: 10px;
		padding: 0 6px;
		hyphens: none;
	}
</style>
