<script lang="ts">
  import * as config from "$lib/config";
  import {
    Card,
    H1,
    H2,
    SectionHeader as Header,
    Link,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
  import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  let { data } = $props();

  // svelte-ignore state_referenced_locally
  let allPosts = data.posts;
  let perPage = 5;

  let currentPage = $state(0);
  let totalRows = $derived(allPosts.length);
  let totalPages = $derived(Math.ceil(totalRows / perPage));
  let start = $derived(currentPage * perPage);
  let end = $derived(
    currentPage === totalRows - 1 ? totalRows - 1 : start + perPage - 1,
  );

  let trimmedRows = $derived(allPosts.slice(start, end + 1));
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<Header width="narrow">
  <H1 color="light">News</H1>
</Header>
<Section
  width="narrow"
  gap="large"
>
  {#each trimmedRows as post}
    <Card format="full">
      <H2>{post.title}</H2>
      <Text>{post.description}</Text>
      <Link href="/news/{post.slug}">Read on</Link>
    </Card>
  {/each}
  <div class="pagination">
    <button
      onclick={() => (currentPage -= 1)}
      disabled={currentPage === 0 ? true : false}
      aria-label="left arrow icon"
      aria-describedby="prev"
    >
      <Fa icon={faArrowLeft} />
    </button>
    <span
      id="prev"
      class="sr-only">Load previous {perPage} rows</span
    >
    <p>{start + 1} - {end + 1} of {totalRows}</p>
    <button
      onclick={() => (currentPage += 1)}
      disabled={currentPage === totalPages - 1 ? true : false}
      aria-label="right arrow icon"
      aria-describedby="next"
    >
      <Fa icon={faArrowRight} />
    </button>
    <span
      id="next"
      class="sr-only">Load next {perPage} rows</span
    >
  </div>
</Section>

<style>
  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;
  }

  .pagination p {
    margin: 0 1rem;
  }

  button {
    transition: var(--transition);
    cursor: pointer;
    outline: 0;
    border: 1px solid var(--color-surface);
    border-radius: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--color-surface);
    padding: 0.75rem 2rem;
    color: var(--color-bg);
    font-size: 1rem;
  }
  button:not([disabled]):hover {
    transform: scale(1.05);
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.125);
  }
  button:focus {
    outline: 1px;
  }
  button:active {
    transform: scale(1);
    box-shadow: inset 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
  }
  button:disabled {
    cursor: not-allowed;
    border: 1px solid var(--color-text);
    background-color: var(--color-text);
  }
</style>
