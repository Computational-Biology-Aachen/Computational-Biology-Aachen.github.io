<script lang="ts">
  import * as config from "#lib/config.js";
  import Seo from "#lib/site/Seo.svelte";
  import { formatDate } from "#lib/utils.js";
  import { H1, Section, Text } from "@computational-biology-aachen/design";
  import type { Component } from "svelte";

  let {
    data,
  }: {
    data: {
      content: Component;
      meta: {
        title: string;
        description?: string;
        author: string;
        date: string;
      };
    };
  } = $props();

  const jsonLd = $derived({
    "@type": "BlogPosting",
    headline: data.meta.title,
    description: data.meta.description,
    datePublished: data.meta.date,
    author: { "@type": "Person", name: data.meta.author },
    publisher: { "@type": "ResearchOrganization", name: config.title },
  });
</script>

<Seo
  title={data.meta.title}
  description={data.meta.description}
  type="article"
  jsonLd={jsonLd}
/>

<Section
  variant="primary"
  width="narrow"
>
  <H1 color="light">{data.meta.title}</H1>
  <Text color="light">Published at {formatDate(data.meta.date)}</Text>
  <Text color="light">Author: {data.meta.author}</Text>
</Section>

<!-- Content -->
<Section width="narrow">
  <data.content />
</Section>
