<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		light = true,
		children
	}: {
		light?: boolean;
		children: Snippet;
	} = $props();
</script>

<section class={light ? 'light' : 'dark'}>
	<div class="inner">
		{@render children()}
	</div>
</section>

<style>
	.light {
		color: var(--primary);
		background-color: var(--white);
	}
	.dark {
		color: var(--white);
		background-color: var(--primary);
	}
	section {
		padding: 2rem 2rem;
		margin: 0;
	}
	.inner {
		max-width: 80ch;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
