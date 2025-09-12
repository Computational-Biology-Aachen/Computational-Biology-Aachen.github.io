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
