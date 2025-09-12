<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		color = 'dark',
		columns = 'one',
		children
	}: {
		color?: 'dark' | 'light' | 'primary' | 'secondary';
		columns?: 'one' | 'two';
		children: Snippet;
	} = $props();
</script>

<ul class={`${color} ${columns}`}>
	{@render children()}
</ul>

<style>
	ul {
		display: grid;
		padding-left: 2rem;
		padding-bottom: var(--text-ypad);
	}

	.one {
		grid-template-columns: 1fr;
	}
	.two {
		grid-template-columns: 1fr;
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

	@media screen and (min-width: 800px) {
		.two {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
