<script lang="ts">
  import imgImport from "$lib/assets/contributor-map.png";
  import type { Member } from "$lib/types";
  import {
    GridPerson,
    H1,
    H2,
    Image,
    CardPerson as Person,
    Section,
    SectionHeader,
    Text,
  } from "@computational-biology-aachen/design";

  let { data } = $props();

  // svelte-ignore state_referenced_locally
  let members: Member[] = data.members;
</script>

<SectionHeader
  variant="primary"
  width="narrow"
>
  <H1 color="light">Team</H1>
  <Text color="light">Members of the AG Matuszyńska as of October 2025</Text>
</SectionHeader>

<Section
  variant="light"
  width="narrow"
>
  <GridPerson
    columns={3}
    gap="var(--space-8)"
  >
    {#each members as { slug, name }}
      <Person
        title={name}
        slug={slug}
      ></Person>
    {/each}
  </GridPerson>
</Section>

<Section variant="light">
  <H2>Where we come from</H2>
  <Text>Celebrating our diverse backgrounds</Text>
  <Image src={imgImport}></Image>
</Section>
