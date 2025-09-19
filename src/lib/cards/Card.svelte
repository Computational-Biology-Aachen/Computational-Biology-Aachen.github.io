<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		format = 'fixed',
		color = 'light'
	}: {
		children: Snippet;
		format?: 'full' | 'fixed';
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<div class={`card ${color} ${format}`}>
	<div class="inner">
		{@render children()}
	</div>
</div>

<style>
	.card {
		margin: 1rem 0;
		padding: 2rem 2.5rem;
		box-shadow:
			0px 18px 36px -18px rgba(0, 0, 0, 0.1),
			0px 30px 45px -30px rgba(50, 50, 93, 0.25);
		border-radius: 8px;
		transform: scale(1);
		transition: transform 0.3s ease;
		/* cursor: pointer; */
		border-top: 8px var(--primary) solid;
	}
	.card:hover {
		transform: scale(1.03);
		box-shadow:
			0px 18px 36px -18px rgba(0, 0, 0, 0.4),
			0px 30px 45px -30px rgba(50, 50, 93, 0.4);
	}
	.inner {
		height: 100%;
		width: 100%;
		margin: 0 auto;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.full {
		width: 100%;
	}
	.fixed {
		width: 26rem;
		height: 26rem;
	}
	.dark {
		background-color: var(--dark);
	}
	.light {
		background-color: color-mix(in srgb, var(--light), white 10%);
	}
	.primary {
		background-color: var(--primary);
	}
	.secondary {
		background-color: var(--secondary);
	}
</style>
