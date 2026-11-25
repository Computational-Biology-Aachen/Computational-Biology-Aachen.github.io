<!--
  @component

  Dev Documentation
  -----------------
  - Code fences are highlighted by mdsvex (twinkleplop), themed with Night Owl dark.
-->

<script module>
  import "@twinkleplop/theme-night-owl/dark";
  import {
    Link as a,
    Code as code,
    H1 as h1,
    H2 as h2,
    H3 as h3,
    H4 as h4,
    H5 as h5,
    H6 as h6,
    Text as p,
    Table as table,
    Tbody as tbody,
    Td as td,
    Th as th,
    Thead as thead,
    Tr as tr,
  } from "@computational-biology-aachen/design";
  import hr from "./hr.svelte";
  import li from "./li.svelte";
  import ul from "./ul.svelte";

  export {
    a,
    code,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    li,
    p,
    table,
    tbody,
    td,
    th,
    thead,
    tr,
    ul,
  };
</script>

<script>
  let { children } = $props();
</script>

{@render children()}

<style>
  :global(pre.twinkleplop) {
    margin: 1rem 0;
    background: var(--twp-background);
    padding: 1rem;
    overflow-x: auto;
    color: var(--twp-identifier);
  }
</style>
