<script lang="ts">
	import Card from '$lib/cards/Card.svelte';
	import Link from '$lib/Link.svelte';
	import json from '$lib/publications.json';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Italic from '$lib/text/Italic.svelte';
	import Text from '$lib/text/Text.svelte';
</script>

<Header>
	<H1 color="light">Our publications</H1>
	<Text color="light"><Italic>Advancing human knowledge ever so slightly.</Italic></Text>
	<Text color="light">
		An up-to-date collection of our scientific work can always be found on
		<Link color="secondary" href="https://orcid.org/0000-0003-0882-6088">ORCID</Link>
		and
		<Link
			color="secondary"
			href="https://scholar.google.com/citations?hl=en&user=H7ip_jsAAAAJ&view_op=list_works&sortby=pubdate"
			>Google Scholar</Link
		>.
	</Text>
</Header>
<Section>
	{#each json as { title, date, doi, authors }}
		<Card format="full">
			<H2>{title}</H2>
			<Text>
				Read at <Link href={doi}>doi</Link>, published {date}. Authored by {authors.join(', ')}
			</Text>
		</Card>
	{/each}
</Section>
