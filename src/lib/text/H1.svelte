<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'dark'
	}: {
		children: Snippet;
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<h1 class={`${color}`}>
	{@render children()}
</h1>

<style>
	h1 {
		font-size: 2rem;
		padding: 0;
		margin: 0 0 var(--text-ypad) 0;
		font-family: var(--font-family);
	}
	.dark {
		color: var(--dark);
	}
	.light {
		color: var(--light);
	}
	.primary {
		color: var(--primary);
	}
	.secondary {
		color: var(--secondary);
	}
</style>
