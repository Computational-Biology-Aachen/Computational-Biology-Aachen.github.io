<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		color = 'inherit',
		children
	}: {
		color?: 'inherit' | 'dark' | 'light' | 'primary' | 'secondary';
		children: Snippet;
	} = $props();
</script>

<li class={`${color}`}>
	{@render children()}
</li>

<style>
	.inherit {
		color: inherit;
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
