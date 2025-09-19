<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'inherit'
	}: {
		children: Snippet;
		color?: 'inherit' | 'black' | 'white' | 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<p class={`${color}`}>
	{@render children()}
</p>

<style>
	p {
		font-size: 1rem;
		margin: 0 0 var(--text-ypad) 0;
		font-family: var(--font-family);
		text-align: justify;
		hyphens: auto;
	}
	.inherit {
		color: inherit;
	}
	.black {
		color: var(--black);
	}
	.white {
		color: var(--white);
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
