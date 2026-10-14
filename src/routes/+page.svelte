<script lang="ts">
  import Home from "#lib/features/home/Home.svelte";
  import type { Post } from "#lib/types.js";
  let {
    data,
  }: {
    data: {
      posts: Post[];
    };
  } = $props();
</script>

<Home data={data} />
