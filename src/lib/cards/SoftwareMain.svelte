<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		title,
		url: href = '/',
		img = '/placeholder.jpg',
		children
	}: {
		title: string;
		url?: string;
		img?: string;
		children: Snippet;
	} = $props();
</script>

<a {href}>
	<div class="card" style:background-image={`url(${img})`}>
		<div class="bar">
			<h4>{title}</h4>
			{@render children()}
		</div>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: 400px;
		width: 100%;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		transition: transform 0.3s ease;
	}
	.card:hover {
		transform: scale(1.01);
	}
	.bar {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		color: var(--light);
		background-color: rgba(0, 0, 0, 0.7);
	}
	h4 {
		color: var(--light);
	}
</style>
