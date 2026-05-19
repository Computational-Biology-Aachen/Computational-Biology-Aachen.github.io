<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<code>
  {@render children()}
</code>

<style>
  code {
    /* background-color: lch(from var(--color-bg) calc(l - 10) c h); */
    border-radius: 10px;
    /* background-color: var(--color-surface); */
    background-color: rgb(from var(--color-surface) r g b / 0.8);
    padding: 0 6px;
    color: white;
    hyphens: none;
  }
</style>
