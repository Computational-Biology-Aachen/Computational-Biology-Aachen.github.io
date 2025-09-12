<script lang="ts">
	let { href, name }: { href: string; name: string } = $props();
</script>

<li><a {href}>{name}</a></li>

<style>
	li {
		list-style: none;
		padding: 1rem;
		font-size: 1.125rem;
	}
	li:hover {
		box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
	}
	a {
		text-decoration: none;
		color: var(--primary);
		transition: var(--transition);
	}
	a:hover {
		text-decoration: underline;
		/* filter: brightness(150%); */
	}
</style>
