<script context="module">
	import a from './Link.svelte';
	import code from './text/Code.svelte';
	import h1 from './text/H1.svelte';
	import h2 from './text/H2.svelte';
	import h3 from './text/H3.svelte';
	import h4 from './text/H4.svelte';
	import h5 from './text/H5.svelte';
	import h6 from './text/H6.svelte';
	import pre from './text/Pre.svelte';
	import p from './text/Text.svelte';

	export { a, code, h1, h2, h3, h4, h5, h6, p, pre };
	export let title;
	export let description;
	export let date;
	export let categories;
	export let published;
</script>

<slot></slot>
