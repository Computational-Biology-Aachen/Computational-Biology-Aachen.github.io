<script lang="ts">
  import cpblImg from "$lib/assets/cpbl-rwth-logo.svg";
  import img from "$lib/assets/hero.jpg";
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
    <img
      src={cpblImg}
      alt="cpbl logo"
    />
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
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--primary);
    width: 100%;
  }
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: auto;
    padding: 2rem 2rem;
    max-width: 80ch;
    height: calc(100vh / 2);
    max-height: 800px;
  }
  h1 {
    margin: 0.5rem 0;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
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
      top: 0;
      right: 0;
    }
  }
</style>
