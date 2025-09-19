<script lang="ts">
	import AlumniTable from '$lib/AlumiTable.svelte';
	import Person from '$lib/cards/Person.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';

	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import type { Member } from '$lib/types';

	let { data } = $props();
	let members: Member[] = data.members;
</script>

<Header>
	<H1 color="light">Team</H1>
</Header>

<Section color="light">
	<GridPerson>
		{#each members as { slug, name }}
			<Person title={name} {slug}></Person>
		{/each}
	</GridPerson>

	<H2 color="dark">Past theses</H2>
	<AlumniTable />
</Section>
