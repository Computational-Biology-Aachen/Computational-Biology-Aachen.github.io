<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<th>
	{@render children()}
</th>

<style>
	th {
		color: white;
		background-color: var(--primary);
		/* background-color: lch(from var(--white) calc(l - 10) c h); */
		padding: 1rem 1.5rem;
		font-weight: 700;
		font-size: 0.83rem;
		line-height: 1rem;
		text-transform: uppercase;
	}
	th:first-of-type {
		border-top-left-radius: 0.5rem;
	}
	th:last-of-type {
		border-top-right-radius: 0.5rem;
	}
</style>
