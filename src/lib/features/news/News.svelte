<script lang="ts">
  import Seo from "#lib/site/Seo.svelte";
  import { resolve } from "$app/paths";
  import type { Post } from "#lib/types.js";
  import {
    Card,
    H1,
    H2,
    SectionHeader as Header,
    Link,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
  import Pagination from "#lib/site/Pagination.svelte";

  let { data }: { data: { posts: Post[] } } = $props();

  // svelte-ignore state_referenced_locally
  let allPosts = data.posts;
  let perPage = 5;

  let currentPage = $state(0);
  let trimmedRows = $derived(
    allPosts.slice(currentPage * perPage, (currentPage + 1) * perPage),
  );
</script>

<Seo
  title="News"
  description="News from the Matuszyńska Lab: publications, talks, events and team updates."
/>

<Header width="narrow">
  <H1 color="light">News</H1>
</Header>
<Section
  width="narrow"
  gap="large"
>
  {#each trimmedRows as post (post.slug)}
    <Card format="full">
      <H2>{post.title}</H2>
      <Text>{post.description}</Text>
      <Link href={resolve("/news/[slug]", { slug: post.slug })}>Read on</Link>
    </Card>
  {/each}
  <Pagination
    bind:page={currentPage}
    perPage={perPage}
    total={allPosts.length}
    color="var(--color-text)"
  />
</Section>
