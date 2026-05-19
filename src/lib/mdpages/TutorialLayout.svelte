<!--
  @component

  Dev Documentation
  -----------------
  - shiki highlighter returns {@html ...} raw HTML — bypasses mdsvex component substitution entirely.
-->

<script context="module">
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
  } from "@computational-biology-aachen/design";
  import hr from "./hr.svelte";
  import li from "./li.svelte";
  import table from "./table.svelte";
  import tbody from "./tbody.svelte";
  import td from "./td.svelte";
  import th from "./th.svelte";
  import thead from "./thead.svelte";
  import tr from "./tr.svelte";
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
  /**
   * @type {string}
   */
  export let title;
  /**
   * @type {string}
   */
  export let description;
  /**
   * @type {string}
   */
  export let date;
  /**
   * @type {string}
   */
  export let categories;
  /**
   * @type {string}
   */
  export let published;
</script>

<slot></slot>

<style>
  :global(.shiki) {
    margin: 1rem 0;
    padding: 1rem;
  }
</style>
