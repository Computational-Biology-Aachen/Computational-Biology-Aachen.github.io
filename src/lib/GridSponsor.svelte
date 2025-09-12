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

	@media (min-width: 768px) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		div {
			grid-template-columns: repeat(auto-fill, minmax(min-content, 150px));
		}
	}
</style>
