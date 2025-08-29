<script lang="ts">
	import BoxHeading from '$lib/BoxHeading.svelte';
	import LightBox from '$lib/BoxLight.svelte';
	import Card from '$lib/Card.svelte';
	import P from '$lib/Text.svelte';
	import json from '$lib/publications.json';
</script>

<BoxHeading>
	<hgroup>
		<h1>Papers</h1>
		<P text="white">
			Advancing human knowledge ever so slightly.
			<br />
			An up-to-date collection of our scientific work can always be found on
			<a class="light" href="https://orcid.org/0000-0003-0882-6088">ORCID</a>
			and
			<a
				class="light"
				href="https://scholar.google.com/citations?hl=en&user=H7ip_jsAAAAJ&view_op=list_works&sortby=pubdate"
				>Google Scholar</a
			>.
		</P>
	</hgroup>
</BoxHeading>
<LightBox>
	{#each json as { title, date, doi, authors }}
		<Card {title}>
			<p><a href={doi}>doi</a>, published {date}.</p>
			<p>Authored by {authors.join(', ')}</p>
		</Card>
	{/each}
</LightBox>
