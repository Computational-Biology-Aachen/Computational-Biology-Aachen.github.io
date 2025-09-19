<script>
	import Person from '$lib/cards/Person.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Li from '$lib/Li.svelte';
	import Link from '$lib/Link.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import team from '$lib/team.json';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Ul from '$lib/Ul.svelte';
</script>

<Header>
	<H1 color="light">Team</H1>
</Header>

<Section color="light">
	<GridPerson>
		{#each team as { slug, name, is_alumni }}
			{#if !is_alumni}
				<Person title={name} {slug}></Person>
			{/if}
		{/each}
	</GridPerson>

	<H2 color="dark">Alumni</H2>
	<Ul columns="two">
		{#each team as { slug, name, is_alumni }}
			{#if is_alumni}
				<Link color="primary" href="team/{slug}">
					<Li color="primary">{name}</Li>
				</Link>
			{/if}
		{/each}
	</Ul>
</Section>
