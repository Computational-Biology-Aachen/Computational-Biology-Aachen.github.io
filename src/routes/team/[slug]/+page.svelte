<script lang="ts">
  import TeamMember from "$lib/features/team/TeamMember.svelte";
  import type { Member } from "$lib/types";
  import type { Component } from "svelte";
  let {
    data,
  }: {
    data: {
      content: Component;
      slug: string;
      meta: Member;
    };
  } = $props();
</script>

<TeamMember data={data} />
