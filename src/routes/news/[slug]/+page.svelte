<script lang="ts">
  import { formatDate } from "$lib/utils";
  import { H1, Section, Text } from "@computational-biology-aachen/design";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title} - Matuszyńska Lab</title>
  <meta
    property="og:type"
    content="article"
  />
  <meta
    property="og:title"
    content={data.meta.title}
  />
</svelte:head>

<Section variant="primary">
  <H1 color="light">{data.meta.title}</H1>
  <Text color="light">Published at {formatDate(data.meta.date)}</Text>
  <Text color="light">Author: {data.meta.author}</Text>
</Section>
<Section>
  <data.content />
</Section>
