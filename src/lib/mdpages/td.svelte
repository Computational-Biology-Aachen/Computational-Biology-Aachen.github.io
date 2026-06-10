<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<td>
  {@render children()}
</td>

<style>
  td {
    padding: 1rem 1.5rem;
    font-size: 0.75rem;
  }
</style>
