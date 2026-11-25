<script module>
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
    Td as td,
    Th as th,
  } from "@computational-biology-aachen/design";

  export { a, code, h1, h2, h3, h4, h5, h6, p, table, td, th };
</script>

<script>
  let { children } = $props();
</script>

{@render children()}
