<script lang="ts">
	import Person from '$lib/cards/Person.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Li from '$lib/Li.svelte';
	import Link from '$lib/Link.svelte';
	import team from '$lib/team.json';
	import H2 from '$lib/text/H2.svelte';
	import Ul from '$lib/Ul.svelte';

	let {
		color = 'dark'
	}: {
		color?: 'dark' | 'light';
	} = $props();

	let bg = color;
	let text: 'dark' | 'light' = color === 'dark' ? 'light' : 'dark';
</script>

<GridPerson>
	{#each team as { slug, name, is_alumni }}
		{#if !is_alumni}
			<Person title={name} {slug}></Person>
		{/if}
	{/each}
</GridPerson>

<H2 color={text}>Alumni</H2>
<Ul columns="two">
	{#each team as { slug, name, is_alumni }}
		{#if is_alumni}
			<Link href="team/{slug}">
				<Li color={text}>{name}</Li>
			</Link>
		{/if}
	{/each}
</Ul>
