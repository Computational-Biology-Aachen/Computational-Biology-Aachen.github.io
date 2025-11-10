<script lang="ts">
	let { children } = $props();
	import { MediaQuery } from 'svelte/reactivity';

	const small = new MediaQuery('max-width: 800px');
</script>

<nav>
	<div class="inner">
		{#if small.current}
			<!-- <ThemeSwitcher /> -->
			<details>
				<summary>=</summary>
				<ul class="dropdown">
					{@render children()}
				</ul>
			</details>
		{:else}
			<ul class="bar">
				{@render children()}
				<!-- <ThemeSwitcher /> -->
			</ul>
		{/if}
	</div>
</nav>

<style>
	nav {
		margin: 0;
		padding: 0;
		background-color: var(--light);
		font-family: var(--font-family);
		position: sticky;
		top: 0;
		z-index: 1000;
	}
	.inner {
		margin: 0 auto;
		width: 100%;
		max-width: var(--max-width);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
	}
	details {
		position: relative;
	}
	summary {
		text-align: center;
		font-size: 1.2rem;
		height: 32px;
		padding: 0 calc(32px / 2);
		border-radius: calc(32px / 2);
		background-color: var(--secondary);
		margin: 0.5rem;
		display: flex;
		align-items: center;
	}
	summary:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	summary::marker {
		content: '';
	}
	summary::after {
		/* content: none; */
		display: block;
		width: 1rem;
		background-image: var(--icon-chevron);
		background-position: right center;
		background-size: 1rem auto;
		background-repeat: no-repeat;
		transform: rotate(0) translateX(0.2rem);
	}

	.dropdown {
		position: absolute;
		right: 0;
		left: auto;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: end;
		z-index: 99;
		background-color: var(--light);
	}

	.bar {
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;
	}
</style>
