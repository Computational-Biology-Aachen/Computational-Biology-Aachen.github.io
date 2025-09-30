<script lang="ts">
	import cpblImg from '$lib/assets/cpbl-rwth-logo.svg';
	import img from '$lib/assets/hero.jpg';
</script>

<div
	class="box"
	style:background-image={`linear-gradient(
			to bottom,
			rgba(245, 246, 252, 0.52),
			color-mix(in srgb, var(--primary) 73%, transparent)
		), url(${img})`}
>
	<div class="inner">
		<img src={cpblImg} alt="cpbl logo" />
		<div>
			<h1>The Matuszyńska Lab</h1>
			<h1>Computational Biology</h1>
			<h1>RWTH Aachen</h1>
		</div>
	</div>
</div>

<style>
	.box {
		position: relative;
		background-color: var(--primary);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin: 0 auto;
	}
	.inner {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		margin: auto;
		max-width: 80ch;
		padding: 2rem 2rem;
		height: calc(100vh / 2);
		max-height: 800px;
	}
	h1 {
		color: white;
		font-family: 'Quicksand', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		font-size: 2rem;
		margin: 0.5rem 0;
		letter-spacing: -2%;
	}
	img {
		position: block;
		max-width: 30rem;
	}
	@media screen and (min-width: 800px) {
		h1 {
			font-size: 2.5rem;
		}
	}
	@media screen and (min-width: 1385px) {
		h1 {
			font-size: 3rem;
		}
		img {
			position: absolute;
			right: 0;
			top: 0;
		}
	}
</style>
