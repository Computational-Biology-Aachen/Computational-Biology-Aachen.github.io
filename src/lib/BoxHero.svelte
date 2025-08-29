<script lang="ts">
</script>

<div class="box">
	<div class="inner">
		<h1>The Matuszyńska Lab</h1>
		<h1>Computational Biology</h1>
		<h1>RWTH Aachen</h1>
	</div>
</div>

<style>
	.box {
		background-image:
			linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(28, 99, 206, 0.73)),
			url('/hero.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
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
	.inner > h1 {
		color: white;
		font-family: 'Quicksand', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400;
		font-style: normal;
		font-size: 2rem;
	}

	@media screen and (min-width: 800px) {
		h1 {
			font-size: 3rem;
		}
	}
</style>
