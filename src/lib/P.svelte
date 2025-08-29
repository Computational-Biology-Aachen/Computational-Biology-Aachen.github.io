<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		text: className = ''
	}: {
		children: Snippet;
		text?: string;
	} = $props();
</script>

<p class={className}>
	{@render children()}
</p>
