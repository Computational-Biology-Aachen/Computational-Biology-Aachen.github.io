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
		box-sizing: border-box;
		padding: 2rem 2rem;
		margin: 0;
		background-color: var(--primary);
		min-height: 12rem;
		display: flex;
		align-items: center;
	}
	.box > * {
		color: var(--white);
	}
	.inner {
		height: 100%;
		width: 100%;
		max-width: 80ch;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
</style>
