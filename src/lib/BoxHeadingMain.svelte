<script lang="ts">
	let {
		n,
		title,
		text = ''
	}: {
		n: string;
		title: string;
		text?: string;
	} = $props();

	import { MediaQuery } from 'svelte/reactivity';

	const small = new MediaQuery('max-width: 800px');
</script>

<div class="box">
	{#if small.current}
		<h1 class={text}>{n} - {title}</h1>
	{:else}
		<h1 class={text}>{n}</h1>
		<h3 class={text}>|</h3>
		<h4 class={text}>{title}</h4>
	{/if}
</div>

<style>
	.box {
		display: flex;
		flex-direction: row;
	}

	h1,
	h4 {
		text-transform: uppercase;
	}

	@media screen and (min-width: 800px) {
		div {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
