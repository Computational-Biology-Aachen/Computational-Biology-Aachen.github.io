<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		columns = 'one',
		children
	}: {
		columns?: 'one' | 'two';
		children: Snippet;
	} = $props();
</script>

<div class={`${columns}`}>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		align-items: center;
		justify-content: center;
		grid-gap: 1rem;
		margin-bottom: var(--text-ypad);
	}
	.one {
		grid-template-columns: 1fr;
	}
	.two {
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 800px) {
		.two {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
