<script lang="ts">
  import News from "$lib/features/news/News.svelte";
  import type { Post } from "$lib/types";

  let { data }: { data: { posts: Post[] } } = $props();
</script>

<News data={data} />
