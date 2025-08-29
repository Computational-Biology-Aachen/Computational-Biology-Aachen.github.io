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
		background-color: var(--primary);
		min-height: 12rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
	}
	.box > * {
		color: var(--white);
	}
	.inner {
		max-width: 80ch;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
