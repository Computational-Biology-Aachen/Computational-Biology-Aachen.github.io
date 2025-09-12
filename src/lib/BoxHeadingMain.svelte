<script lang="ts">
	let {
		n,
		title,
		color = 'dark'
	}: {
		n: string;
		title: string;
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();

	import { MediaQuery } from 'svelte/reactivity';
	import H1 from './text/H1.svelte';
	import H4 from './text/H4.svelte';

	const small = new MediaQuery('max-width: 800px');
</script>

<div class="box">
	{#if small.current}
		<H1>{n.toUpperCase()} - {title.toUpperCase()}</H1>
	{:else}
		<H1 {color}>{n.toUpperCase()}</H1>
		<H4 {color}>|</H4>
		<H1 {color}>{title.toUpperCase()}</H1>
	{/if}
</div>

<style>
	.box {
		display: flex;
		flex-direction: row;
	}

	@media screen and (min-width: 800px) {
		.box {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
