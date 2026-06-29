<script lang="ts">
  import Tutorials from "$lib/features/tutorials/Tutorials.svelte";
  let {
    data,
  }: {
    data: {
      content: string;
      meta: string;
    };
  } = $props();
</script>

<Tutorials data={data} />
