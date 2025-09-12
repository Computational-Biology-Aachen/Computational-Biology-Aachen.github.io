<script lang="ts">
	import H1 from '$lib/text/H1.svelte';
	import Text from '$lib/text/Text.svelte';

	let {
		name,
		img
	}: {
		name: string;
		img: string;
	} = $props();

	let imageError = $state(false);

	function handleError() {
		imageError = true;
	}
</script>

<section>
	<div class="grid">
		<div class="info">
			<H1 color="light">{name}</H1>
			<Text color="light">Department of Biology</Text>
			<Text color="light">Faculty of Mathematics, Computer Science and Natural Sciences</Text>
			<!-- <Text color="light">anna.matuszynska@rwth-aachen.de</Text> -->
			<Text color="light">Worringerweg 1 52074 Aachen</Text>
		</div>
		{#if imageError}
			<div class="placeholder">
				<span>Image not found</span>
			</div>
		{:else}
			<img src={img} alt={name} onerror={handleError} />
		{/if}
	</div>
</section>

<style>
	section {
		padding: var(--section-ypad) 0;
		background-color: var(--primary);
		width: 100%;
	}
	.grid {
		margin: 0 auto;
		width: 100%;
		max-width: 80ch;
		display: grid;
		grid-template-columns: 1fr;
		padding: 0 1rem;
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: 1fr 300px;
		}
	}

	img {
		margin: 0 auto;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		border: 4px solid var(--white);
	}

	.placeholder {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		color: var(--white);
		background-color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		border: 4px solid var(--white);
	}
</style>
