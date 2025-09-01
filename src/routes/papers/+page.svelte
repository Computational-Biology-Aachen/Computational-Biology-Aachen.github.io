<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import Card from '$lib/Card.svelte';
	import Link from '$lib/Link.svelte';
	import json from '$lib/publications.json';
	import Section from '$lib/Section.svelte';
	import Text from '$lib/Text.svelte';
</script>

<BoxHeading>
	<hgroup>
		<h1>Papers</h1>
		<Text text="white">
			Advancing human knowledge ever so slightly.
			<br />
			An up-to-date collection of our scientific work can always be found on
			<Link light={true} href="https://orcid.org/0000-0003-0882-6088">ORCID</Link>
			and
			<Link
				light={true}
				href="https://scholar.google.com/citations?hl=en&user=H7ip_jsAAAAJ&view_op=list_works&sortby=pubdate"
				>Google Scholar</Link
			>.
		</Text>
	</hgroup>
</BoxHeading>
<Section>
	{#each json as { title, date, doi, authors }}
		<Card {title}>
			<Link href={doi}>doi</Link>, published {date}.
			<p>Authored by {authors.join(', ')}</p>
		</Card>
	{/each}
</Section>
