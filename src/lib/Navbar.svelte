<script lang="ts">
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { MediaQuery } from 'svelte/reactivity';

	const small = new MediaQuery('max-width: 800px');
	let { children } = $props();
</script>

<nav>
	<ul>
		{#if small.current}
			<details class="dropdown">
				<summary> <Fa icon={faBars} /> </summary>
				<ul dir="rtl">
					{@render children()}
				</ul>
			</details>
		{:else}
			{@render children()}
		{/if}
	</ul>
</nav>

<style>
	nav {
		min-height: 4rem;
		padding: 0 2rem;
		justify-content: flex-end;
		align-items: center;
	}
</style>
