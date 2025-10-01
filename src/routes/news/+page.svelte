<script lang="ts">
	import Card from '$lib/cards/Card.svelte';
	import * as config from '$lib/config';
	import Link from '$lib/Link.svelte';
	import Header from '$lib/sections/Header.svelte';
	import Section from '$lib/sections/Section.svelte';
	import H1 from '$lib/text/H1.svelte';
	import H2 from '$lib/text/H2.svelte';
	import Text from '$lib/text/Text.svelte';
	import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let { data } = $props();
	let allPosts = data.posts;
	let perPage = 5;

	let currentPage = $state(0);
	let totalRows = $derived(allPosts.length);
	let totalPages = $derived(Math.ceil(totalRows / perPage));
	let start = $derived(currentPage * perPage);
	let end = $derived(currentPage === totalRows - 1 ? totalRows - 1 : start + perPage - 1);

	let trimmedRows = $derived(allPosts.slice(start, end + 1));
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Header>
	<H1 color="light">News</H1>
</Header>
<Section>
	{#each trimmedRows as post}
		<Card format="full">
			<H2>{post.title}</H2>
			<Text>{post.description}</Text>
			<Link href="/news/{post.slug}">Read on</Link>
		</Card>
	{/each}
	<div class="pagination">
		<button
			onclick={() => (currentPage -= 1)}
			disabled={currentPage === 0 ? true : false}
			aria-label="left arrow icon"
			aria-describedby="prev"
		>
			<Fa icon={faArrowLeft} />
		</button>
		<span id="prev" class="sr-only">Load previous {perPage} rows</span>
		<p>{start + 1} - {end + 1} of {totalRows}</p>
		<button
			onclick={() => (currentPage += 1)}
			disabled={currentPage === totalPages - 1 ? true : false}
			aria-label="right arrow icon"
			aria-describedby="next"
		>
			<Fa icon={faArrowRight} />
		</button>
		<span id="next" class="sr-only">Load next {perPage} rows</span>
	</div>
</Section>

<style>
	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	.pagination {
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: all;
	}

	.pagination p {
		margin: 0 1rem;
	}

	button {
		font-size: 1rem;
		border-radius: 0.25rem;
		outline: 0;
		padding: 0.75rem 2rem;
		border-radius: 0.25rem;
		transition: var(--transition);
		color: var(--light);
		border: 1px solid var(--primary);
		background-color: var(--primary);
		cursor: pointer;
	}
	button:not([disabled]):hover {
		transform: scale(1.05);
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	button:focus {
		outline: 1px;
	}
	button:active {
		transform: scale(1);
		box-shadow: inset 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
	}
	button:disabled {
		cursor: not-allowed;
		border: 1px solid var(--dark);
		background-color: var(--dark);
	}
</style>
