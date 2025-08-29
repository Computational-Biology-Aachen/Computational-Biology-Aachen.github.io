<script lang="ts">
	let {
		path,
		alt = 'profile'
	}: {
		path: string;
		alt?: string;
	} = $props();

	let imageError = $state(false);

	function handleError() {
		imageError = true;
	}
</script>

{#if imageError}
	<div class="placeholder">
		<span>Image not found</span>
	</div>
{:else}
	<img src={path} {alt} onerror={handleError} />
{/if}

<style>
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin-bottom: 1rem;
		border: 4px solid var(--color);
	}

	.placeholder {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		color: var(--background-color);
		background-color: var(--color);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		border: 4px solid var(--color);
	}
</style>
