<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="box">
	<div class="inner">
		{@render children()}
	</div>
</div>

<style>
	.box {
		padding: 2rem 2rem;
		margin: 0;
		background-color: var(--box-bg-color);
	}
	.box > * {
		color: var(--box-color);
	}
	.inner {
		max-width: 80ch;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
