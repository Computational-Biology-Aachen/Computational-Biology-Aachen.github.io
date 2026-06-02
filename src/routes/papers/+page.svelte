<script lang="ts">
  import biorxivImg from "$lib/assets/biorxiv_logo.png";
  import json from "$lib/publications.json";
  import {
    H1,
    SectionHeader as Header,
    Italic,
    Link,
    CardPublication as Publication,
    Section,
    Text,
  } from "@computational-biology-aachen/design";
</script>

<Header width="narrow">
  <H1 color="light">Our publications</H1>
  <Text color="light"
    ><Italic>Advancing human knowledge ever so slightly.</Italic></Text
  >
  <Text color="light">
    An up-to-date collection of our scientific work can always be found on <Link
      color="secondary"
      href="https://orcid.org/0000-0003-0882-6088">ORCID</Link
    > and <Link
      color="secondary"
      href="https://scholar.google.com/citations?hl=en&user=H7ip_jsAAAAJ&view_op=list_works&sortby=pubdate"
      >Google Scholar</Link
    >.
  </Text>
</Header>

<Section
  width="narrow"
  gap="large"
>
  {#each json as { title, date, doi, authors, preprint }}
    <Publication
      title={title}
      format="full"
      img={preprint ? biorxivImg : null}
    >
      <Text>
        Published {date}, read at <Link href={doi}>doi</Link>. Authored by {authors.join(
          ", ",
        )}
      </Text>
    </Publication>
  {/each}
</Section>
