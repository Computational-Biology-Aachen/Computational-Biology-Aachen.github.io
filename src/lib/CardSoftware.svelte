<script lang="ts">
	import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
	import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	import Card from './Card.svelte';
	let {
		children,
		title,
		github = null,
		gitlab = null,
		doi = null
	}: {
		children: Snippet;
		title: string;
		github?: string | null;
		gitlab?: string | null;
		doi?: string | null;
	} = $props();
</script>

<Card {title}>
	{@render children()}
	{#if github != null}
		<a href={github}><Fa icon={faGithub} /> Check me out at Github</a>
	{:else if gitlab != null}
		<a href={gitlab}><Fa icon={faGitlab} /> Check me out at GitLab</a>
	{/if}
	{#if doi != null}
		<a href="https://doi.org/{doi}"><Fa icon={faNewspaper} />Publication</a>
	{/if}
</Card>
