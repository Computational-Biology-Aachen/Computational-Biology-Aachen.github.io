<script lang="ts">
	let { children } = $props();
</script>

<ul>
	{@render children()}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		grid-gap: 10px;
	}

	@media screen and (min-width: 800px) {
		ul {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
