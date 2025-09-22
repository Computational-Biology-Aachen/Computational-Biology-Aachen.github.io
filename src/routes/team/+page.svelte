<script lang="ts">
	import Person from '$lib/cards/Person.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';

	import H1 from '$lib/text/H1.svelte';
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
</Section>
