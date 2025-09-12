<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding-bottom: var(--text-ypad);
	}
</style>
