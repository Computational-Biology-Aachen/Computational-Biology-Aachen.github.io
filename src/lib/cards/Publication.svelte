<script lang="ts">
	import Link from '$lib/Link.svelte';
	import type { Snippet } from 'svelte';
	let {
		title,
		href = '/',
		img = '/placeholder.jpg',
		children
	}: {
		title: string;
		href?: string;
		img?: string;
		children: Snippet;
	} = $props();
</script>

<Link {href}>
	<div class="card" style:background-image={`url(${img})`}>
		<div class="bar">
			<h4>{title}</h4>
			{@render children()}
		</div>
	</div>
</Link>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: 400px;
		width: 100%;
		background-color: white;
		background-repeat: no-repeat;
		background-size: cover;
		transition: transform 0.3s ease;
	}
	.card:hover {
		transform: scale(1.01);
	}

	@media (min-width: 768px) {
		.card {
			background-size: 95%;
			background-position: center;
		}
	}
	.bar {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.7);
	}
	h4 {
		color: var(--white);
	}
</style>
