<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<th>
  {@render children()}
</th>

<style>
  th {
    background-color: var(--color-surface);
    /* background-color: lch(from var(--color-bg) calc(l - 10) c h); */
    padding: 1rem 1.5rem;
    color: white;
    font-weight: 700;
    font-size: 0.83rem;
    line-height: 1rem;
    text-transform: uppercase;
  }
  th:first-of-type {
    border-top-left-radius: 0.5rem;
  }
  th:last-of-type {
    border-top-right-radius: 0.5rem;
  }
</style>
