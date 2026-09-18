<script lang="ts">
  import { page } from "$app/state";
  import {
    Button,
    H1,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
</script>

<svelte:head>
  <title>{page.status} - Matuszyńska Lab</title>
</svelte:head>

<Section
  variant="dark"
  width="narrow"
>
  <H1 color="light">{page.status}</H1>
  <Text color="light">
    {#if page.status === 404}
      We couldn't find the page you were looking for. It may have moved, or the
      link may be out of date.
    {:else}
      {page.error?.message ?? "Something went wrong."}
    {/if}
  </Text>
  <Button
    href="/"
    variant="secondary">Back to the homepage</Button
  >
</Section>
