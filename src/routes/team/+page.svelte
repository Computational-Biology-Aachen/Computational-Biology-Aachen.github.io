<script lang="ts">
  import imgImport from "$lib/assets/contributor-map.png";
  import type { Member } from "$lib/types";
  import {
    GridPerson,
    H1,
    H2,
    SectionHeader as Header,
    Image,
    Narrow,
    CardPerson as Person,
    Section,
    Text,
  } from "@computational-biology-aachen/design";

  let { data } = $props();
  let members: Member[] = data.members;
</script>

<Header color="primary">
  <Narrow>
    <H1 color="light">Team</H1>
    <Text color="light">Members of the AG Matuszyńska as of October 2025</Text>
  </Narrow>
</Header>

<Section variant="light">
  <Narrow>
    <GridPerson>
      {#each members as { slug, name }}
        <Person
          title={name}
          slug={slug}
        ></Person>
      {/each}
    </GridPerson>
  </Narrow>
</Section>

<Section variant="light">
  <H2>Where we come from</H2>
  <Text>Celebrating our diverse backgrounds</Text>
  <Image src={imgImport}></Image>
</Section>
