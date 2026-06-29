<script lang="ts">
  import Team from "$lib/features/team/Team.svelte";
  import type { Member } from "$lib/types";

  let {
    data,
  }: {
    data: {
      members: Member[];
    };
  } = $props();
</script>

<Team data={data} />
