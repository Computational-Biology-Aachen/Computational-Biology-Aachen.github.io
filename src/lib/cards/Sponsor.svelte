<script lang="ts">
	import Link from '$lib/Link.svelte';

	let {
		href,
		img,
		name
	}: {
		href: string;
		name: string;
		img: string;
	} = $props();
</script>

<Link {href}>
	<div class="card" style="background-image: url({img})"></div>
</Link>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: 200px;
		max-width: 300px;
		width: 100%;
		max-width: 500px;
		padding: 0;
		margin: 0 auto;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		transition: all 0.5s ease;
	}
	.card:hover {
		/* border: 1px solid var(--primary); */
		transform: scale(1.07);
	}
	/* .bar {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2rem 0 1rem 1rem;
		color: var(--light);
		background-color: rgba(0, 0, 0, 0.7);
	} */
</style>
