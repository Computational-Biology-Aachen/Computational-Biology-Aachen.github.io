<script lang="ts">
  import NewsPage from "$lib/features/news/NewsPage.svelte";
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

<NewsPage data={data} />
