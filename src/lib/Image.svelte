<script lang="ts">
	let {
		src,
		alt = 'profile'
	}: {
		src: string;
		alt?: string;
	} = $props();
</script>

<img {src} {alt} />

<style>
	img {
		display: block;
		max-width: 100%;
		margin: 0 auto 1rem;
	}
</style>
