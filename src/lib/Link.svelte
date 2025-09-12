<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		href,
		color = 'primary',
		children
	}: {
		href: string;
		color?: 'dark' | 'light' | 'primary' | 'secondary';
		children: Snippet;
	} = $props();
</script>

<a {href} class={`${color}`}>
	{@render children()}
</a>

<style>
	a {
		font-family: sans-serif;
		text-decoration: none;
		/* text-decoration: currentcolor underline dashed auto; */
		transition: var(--transition);
		margin: 0 0 var(--text-ypad) 0;
		padding: 0 0.5ch;
	}
	a:hover {
		text-decoration: underline;
		/* filter: brightness(150%); */
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
