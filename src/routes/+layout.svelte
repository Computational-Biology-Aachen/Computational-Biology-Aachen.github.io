<script lang="ts">
  import favicon from "$lib/assets/cpbl-favicon.svg";
  import * as config from "$lib/config";
  import {
    CollapseToBurger,
    Navbar,
    NavGH,
    NavItem,
  } from "@computational-biology-aachen/design";
  import "../app.css";

  let { children } = $props();
</script>

<!-- SEO -->
<svelte:head>
  <meta
    name="description"
    content={config.description}
  />
  <meta
    property="og:title"
    content={config.title}
  />
  <meta
    property="og:description"
    content={config.description}
  />
  <meta
    property="og:url"
    content={config.url}
  />
  <meta
    property="og:type"
    content="website"
  />
  <meta
    name="twitter:card"
    content="summary"
  />
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

<Navbar>
  {#snippet brand()}
    <span class="brand">The Matuszyńska Lab</span>
  {/snippet}
  <CollapseToBurger collapseAt="920px">
    <NavItem href="/">Home</NavItem>
    <NavItem href="/team">Team</NavItem>
    <NavItem href="/teaching">Teaching</NavItem>
    <NavItem href="/papers">Papers</NavItem>
    <NavItem href="/software">Resources</NavItem>
    <NavItem href="/tutorials">Tutorials</NavItem>
    <NavItem href="/news">News</NavItem>
  </CollapseToBurger>
  <NavGH href="https://github.com/Computational-Biology-Aachen" />
</Navbar>

{@render children()}

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
