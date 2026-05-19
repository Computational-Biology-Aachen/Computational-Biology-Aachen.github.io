<script lang="ts">
	import Person from '$lib/cards/Person.svelte';
	import GridPerson from '$lib/GridPerson.svelte';
	import Header from '$lib/sections/Header.svelte';
	import { Section } from '@computational-biology-aachen/design';

	import H1 from '$lib/text/H1.svelte';
	import type { Member } from '$lib/types';

	import imgImport from '$lib/assets/contributor-map.png';
	import Image from '$lib/Image.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';

	let { data } = $props();
	let members: Member[] = data.members;
</script>

<Header>
	<H1 color="light">Team</H1>
	<Text color="light">Members of the AG Matuszyńska as of October 2025</Text>
</Header>

<Section variant="light">
	<GridPerson>
		{#each members as { slug, name }}
			<Person title={name} {slug}></Person>
		{/each}
	</GridPerson>
</Section>

<Section variant="light">
	<H2>Where we come from</H2>
	<Text>Celebrating our diverse backgrounds</Text>
	<Image src={imgImport}></Image>
</Section>
