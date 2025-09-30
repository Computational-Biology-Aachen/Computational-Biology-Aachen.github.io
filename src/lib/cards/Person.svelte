<script lang="ts">
	import Link from '$lib/Link.svelte';
	const images = import.meta.glob(['$lib/assets/people/*'], {
		eager: true,
		query: '?url',
		import: 'default'
	});

	let {
		title,
		slug
	}: {
		title: string;
		slug: string;
	} = $props();

	let filename = `/src/lib/assets/people/${slug}.jpg`;
	let img = images[filename] ?? '/src/lib/assets/people/placeholder.jpg';
	// console.log(img);
	// let img = asset(`/people/marvin-van-aalst.jpg`);
</script>

<Link color="light" href="team/{slug}">
	<div class="card" style:background-image="url({img})">
		<div class="bar">
			<h4 class="white">{title}</h4>
		</div>
	</div>
</Link>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		width: 100%;
		aspect-ratio: 4/3;
		padding: 0;
		margin: 0 auto;
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
		width: 75%;
		padding: 0.5rem;
		margin: 0 auto;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.7);
	}
	h4 {
		padding: 0;
		margin: 0;
		font-size: 14px;
	}
</style>
