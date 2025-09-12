<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		color = 'primary'
	}: {
		children: Snippet;
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<button class={`${color}`}>
	{@render children()}
</button>

<style>
	button {
		font-size: 1rem;
		border-radius: 0.25rem;
		outline: 0;
		padding: 0.75rem 2rem;
		border-radius: 0.25rem;
		transition: var(--transition);
	}
	button:hover {
		text-decoration: underline;
	}

	.primary {
		color: var(--light);
		border: 1px solid var(--primary);
		background-color: var(--primary);
	}
	.primary:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	.secondary {
		color: var(--dark);
		border: 1px solid var(--secondary);
		background-color: var(--secondary);
	}
	.secondary:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	.dark {
		color: var(--light);
		border: 1px solid var(--dark);
		background-color: var(--dark);
	}
	.dark:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(255, 255, 255, 0.125);
	}
	.light {
		color: var(--primary);
		border: 1px solid var(--light);
		background-color: var(--light);
	}
	.light:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
</style>
