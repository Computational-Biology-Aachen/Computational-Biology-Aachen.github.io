<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		light = false,
		children
	}: {
		light?: boolean;
		children: Snippet;
	} = $props();
</script>

<ul class={light ? 'light' : 'dark'}>
	{@render children()}
</ul>

<style>
	.light {
		color: var(--white);
	}
	.dark {
		color: var(--primary);
	}
</style>
