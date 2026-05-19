<script lang="ts">
  import { formatDate } from "$lib/utils";
  import {
    H1,
    Narrow,
    Section,
    Text,
  } from "@computational-biology-aachen/design";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
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
  <Narrow>
    <H1 color="light">{data.meta.title}</H1>
    <Text color="light">Published at {formatDate(data.meta.date)}</Text>
    <Text color="light">Author: {data.meta.author}</Text>
  </Narrow>
</Section>
<Section>
  <Narrow>
    <data.content />
  </Narrow>
</Section>
