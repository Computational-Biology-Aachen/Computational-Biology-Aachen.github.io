<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		color = 'light'
	}: {
		children: Snippet;
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<section class={`${color}`}>
	<div class="inner">
		{@render children()}
	</div>
</section>

<style>
	section {
		margin: 0;
		padding: var(--section-ypad) 0;
		/* min-height: 20rem; */
	}
	.inner {
		margin: 0 auto;
		max-width: 80ch;
	}
	.dark {
		color: var(--white);
		background-color: var(--dark);
	}
	.light {
		color: var(--dark);
		background-color: var(--light);
	}
	.primary {
		background-color: var(--primary);
	}
	.secondary {
		background-color: var(--secondary);
	}
</style>
