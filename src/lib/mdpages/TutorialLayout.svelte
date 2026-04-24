<!--
  @component

  Dev Documentation
  -----------------
  - shiki highlighter returns {@html ...} raw HTML — bypasses mdsvex component substitution entirely.
-->

<script context="module">
	import a from '../Link.svelte';
	import code from '../text/Code.svelte';
	import h1 from '../text/H1.svelte';
	import h2 from '../text/H2.svelte';
	import h3 from '../text/H3.svelte';
	import h4 from '../text/H4.svelte';
	import h5 from '../text/H5.svelte';
	import h6 from '../text/H6.svelte';
	import p from '../text/Text.svelte';
	import table from './table.svelte';
	import td from './td.svelte';
	import th from './th.svelte';

	export { a, code, h1, h2, h3, h4, h5, h6, p, table, td, th };
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {string}
	 */
	export let description;
	/**
	 * @type {string}
	 */
	export let date;
	/**
	 * @type {string}
	 */
	export let categories;
	/**
	 * @type {string}
	 */
	export let published;
</script>

<slot></slot>

<style>
	:global(.shiki) {
		padding: 1rem;
		margin: 1rem 0;
	}

	:global(table) {
		border-collapse: collapse;
		width: 100%;
		text-align: left;
		margin: 1rem 0;
	}

	:global(th),
	:global(td) {
		padding: 0.5rem 1rem;
		border: 1px solid #333;
	}
</style>
