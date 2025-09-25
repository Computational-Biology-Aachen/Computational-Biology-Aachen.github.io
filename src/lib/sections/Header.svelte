<script lang="ts">
	let { children } = $props();
</script>

<header>
	<div class="inner">
		{@render children()}
	</div>
</header>

<style>
	header {
		margin: 0;
		padding: var(--section-ypad) 0;
		background-color: var(--primary);
		min-height: 12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.inner {
		margin: 0 auto;
		padding: 0 1rem;
		width: 100%;
		max-width: 80ch;
	}

	@media (min-width: 768px) {
		.inner {
			padding: 0;
		}
	}
</style>
