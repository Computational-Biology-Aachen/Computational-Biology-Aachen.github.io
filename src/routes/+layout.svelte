<script lang="ts">
  import * as config from "$lib/config";
  import "../app.css";

  import favicon from "$lib/assets/cpbl-favicon.svg";
  import { Navbar, NavGH, NavItem } from "@computational-biology-aachen/design";

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
  <title>The Matuszyńska Lab</title>
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

<Navbar>
  {#snippet brand()}
    <span class="brand">The Matuszyńska Lab</span>
  {/snippet}
  <NavItem href="/">Home</NavItem>
  <NavItem href="/team">Team</NavItem>
  <NavItem href="/teaching">Teaching</NavItem>
  <NavItem href="/papers">Papers</NavItem>
  <NavItem href="/software">Resources</NavItem>
  <NavItem href="/tutorials">Tutorials</NavItem>
  <NavItem href="/news">News</NavItem>
  <NavGH />
</Navbar>

{@render children()}

<style>
  .brand {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }
</style>
