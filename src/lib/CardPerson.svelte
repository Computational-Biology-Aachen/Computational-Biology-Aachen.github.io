<script lang="ts">
	let {
		title
	}: {
		title: string;
	} = $props();
</script>

<div class="card">
	<div class="bar">
		<h4 class="white">{title}</h4>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		justify-content: end;
		width: 100%;
		aspect-ratio: 4/3;
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
	h4 {
		padding: 0;
		margin: 0;
		font-size: 1rem;
	}
</style>
