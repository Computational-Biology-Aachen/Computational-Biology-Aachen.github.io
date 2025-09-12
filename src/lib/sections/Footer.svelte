<script lang="ts">
	let { children } = $props();
</script>

<footer>
	<div class="inner">
		{@render children()}
	</div>
</footer>

<style>
	footer {
		margin: 0;
		padding: var(--section-ypad) 0;
		min-height: 12rem;
		background-color: var(--dark);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.inner {
		margin: 0 auto;
		width: 100%;
		max-width: 80ch;
	}
</style>
