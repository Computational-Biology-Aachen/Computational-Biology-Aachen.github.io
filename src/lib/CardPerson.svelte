<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		title
	}: {
		children: Snippet;
		title: string;
	} = $props();
</script>

<div class="card">
	<div class="bar">
		<h3 class="white">{title}</h3>
		{@render children()}
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: 400px;
		width: 100%;
		max-width: 500px;
		padding: 0;
		margin: 0 auto;
		background-image: url('/placeholder.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.bar {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem 0 1rem 1rem;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>
