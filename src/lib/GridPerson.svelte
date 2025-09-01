<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, 500px);
		align-items: center;
		justify-content: center;
		grid-gap: 10px;
	}
</style>
