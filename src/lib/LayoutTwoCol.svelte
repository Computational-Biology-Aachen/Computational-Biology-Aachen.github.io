<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		grid-gap: 10px;
	}

	@media screen and (min-width: 800px) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
