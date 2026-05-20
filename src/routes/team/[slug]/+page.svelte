<script lang="ts">
  import type { Member } from "$lib/types";
  import {
    SectionHeaderPerson as HeaderPerson,
    Section,
  } from "@computational-biology-aachen/design";

  const images = import.meta.glob(["$lib/assets/people/*"], {
    eager: true,
    query: "?url",
    import: "default",
  });

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  let person: Member = data.meta;

  // svelte-ignore state_referenced_locally
  let filename = `/people/${data.slug.split("/").at(-1)}.jpg`;
  let img: string =
    (images[`/src/lib/assets${filename}`] as string) ||
    "/src/lib/assets/people/placeholder.jpg";
</script>

<svelte:head>
  <title>{person.name}</title>
  <meta
    property="og:type"
    content="article"
  />
</svelte:head>

<HeaderPerson
  name={person.name}
  img={img}
  mail={person.mail}
  github={person.github}
  gitlab={person.gitlab}
  orcid={person.orcid}
  website={person.website}
></HeaderPerson>

<Section width="narrow">
  <data.content />
</Section>
