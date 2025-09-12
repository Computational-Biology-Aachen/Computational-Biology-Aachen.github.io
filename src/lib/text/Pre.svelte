<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet;
	} = $props();
</script>

<pre>
	{@render children()}
</pre>

<style>
	pre {
		padding: 1rem;
	}
</style>
