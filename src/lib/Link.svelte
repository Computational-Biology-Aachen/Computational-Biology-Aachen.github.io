<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		href,
		light = false,
		children
	}: {
		href: string;
		light?: boolean;
		children: Snippet;
	} = $props();
</script>

<a {href} class={light ? 'light' : 'dark'}>{@render children()}</a>

<style>
	.light {
		color: var(--white);
	}
	.dark {
		color: var(--primary);
	}
	a {
		text-decoration-color: var(--underline);
		text-underline-offset: 0.125em;
	}

	a,
	:hover,
	:active,
	:focus {
		text-decoration: underline;
	}

	a:hover {
		color: var(--primary);
	}
</style>
