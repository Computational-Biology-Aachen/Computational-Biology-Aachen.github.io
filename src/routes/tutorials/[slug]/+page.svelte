<script lang="ts">
  import Tutorial from "$lib/features/tutorials/Tutorial.svelte";
  import type { Component } from "svelte";

  let {
    data,
  }: {
    data: {
      content: Component;
      meta: {
        title: string;
        author: string;
        date: string;
      };
    };
  } = $props();
</script>

<Tutorial data={data} />
