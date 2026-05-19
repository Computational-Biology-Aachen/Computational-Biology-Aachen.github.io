<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<table>
  {@render children()}
</table>

<style>
  table {
    margin-bottom: 1rem;
    border-collapse: collapse;
    width: 100%;
    overflow-x: auto;
    font-family: var(--font-sans);
    text-align: left;
    text-indent: 0;
  }
</style>
