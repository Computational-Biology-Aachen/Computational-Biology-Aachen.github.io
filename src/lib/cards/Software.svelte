<script lang="ts">
	import Link from '$lib/Link.svelte';
	import H2 from '$lib/text/H2.svelte';
	import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
	import { faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';
	import type { Snippet } from 'svelte';
	import Fa from 'svelte-fa';
	let {
		children,
		title,
		img,
		github = null,
		gitlab = null,
		href = null,
		doi = null,
		format = 'full',
		color = 'light'
	}: {
		children: Snippet;
		title: string;
		img?: string | null;
		github?: string | null;
		gitlab?: string | null;
		doi?: string | null;
		href?: string | null;
		format?: 'full' | 'fixed';
		color?: 'dark' | 'light' | 'primary' | 'secondary';
	} = $props();
</script>

<div class={`card ${color} ${format}`}>
	<div class="inner" style:background-image={`url(${img})`}>
		<H2>{title}</H2>
		{@render children()}
		{#if github != null}
			<Link href={github}><Fa icon={faGithub} /> Check me out at Github</Link>
		{:else if gitlab != null}
			<Link href={gitlab}><Fa icon={faGitlab} /> Check me out at GitLab</Link>
		{/if}
		{#if href != null}
			<Link {href}><Fa icon={faHome} />Website</Link>
		{/if}
		{#if doi != null}
			<Link href="https://doi.org/{doi}"><Fa icon={faNewspaper} />Publication</Link>
		{/if}
	</div>
</div>

<style>
	.card {
		margin: 1rem 0;
		padding: 0;
		box-shadow:
			0px 18px 36px -18px rgba(0, 0, 0, 0.1),
			0px 30px 45px -30px rgba(50, 50, 93, 0.25);
		border-radius: 8px;
		transform: scale(1);
		transition: transform 0.3s ease;
		border-top: 8px var(--primary) solid;
	}
	.card:hover {
		transform: scale(1.03);
		box-shadow:
			0px 18px 36px -18px rgba(0, 0, 0, 0.4),
			0px 30px 45px -30px rgba(50, 50, 93, 0.4);
	}
	.inner {
		height: 100%;
		width: 100%;
		padding: 2.5rem 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		background-size: 250px;
		background-repeat: no-repeat;
		background-position-x: 98%;
		background-position-y: 90%;
		background-color: color-mix(in srgb, var(--light) 75%, transparent);
		background-blend-mode: lighten;
	}

	.full {
		width: 100%;
	}
	.fixed {
		width: 26rem;
		height: 26rem;
	}
	.dark {
		background-color: var(--dark);
	}
	.light {
		background-color: color-mix(in srgb, var(--light), white 10%);
	}
	.primary {
		background-color: var(--primary);
	}
	.secondary {
		background-color: var(--secondary);
	}
</style>
