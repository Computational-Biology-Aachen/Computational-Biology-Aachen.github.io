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
  import table from "./table.svelte";
  import td from "./td.svelte";
  import th from "./th.svelte";

  export { a, code, h1, h2, h3, h4, h5, h6, p, table, td, th };

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
