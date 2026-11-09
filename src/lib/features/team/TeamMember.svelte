<script lang="ts">
  import * as config from "#lib/config.js";
  import { absoluteUrl } from "#lib/site/content.js";
  import Seo from "#lib/site/Seo.svelte";
  import type { Member } from "#lib/types.js";
  import {
    SectionHeaderPerson as HeaderPerson,
    Section,
  } from "@computational-biology-aachen/design";
  import type { Component } from "svelte";

  const images = import.meta.glob(["/src/lib/assets/people/*"], {
    eager: true,
    query: "?url",
    import: "default",
  });

  let {
    data,
  }: {
    data: {
      content: Component;
      slug: string;
      meta: Member;
    };
  } = $props();
  // svelte-ignore state_referenced_locally
  let person: Member = data.meta;

  // svelte-ignore state_referenced_locally
  let filename = `/people/${data.slug.split("/").at(-1)}.jpg`;
  let img: string =
    (images[`/src/lib/assets${filename}`] as string) ||
    "/src/lib/assets/people/placeholder.jpg";

  // No email: kept out of machine-readable data on purpose.
  const jsonLd = {
    "@type": "Person",
    name: person.name,
    image: images[`/src/lib/assets${filename}`] ? absoluteUrl(img) : undefined,
    affiliation: {
      "@type": "ResearchOrganization",
      name: config.title,
      url: absoluteUrl("/"),
    },
    sameAs: [person.orcid, person.github, person.gitlab, person.website].filter(
      Boolean,
    ),
  };
</script>

<Seo
  title={person.name}
  description="{person.name} - member of the Matuszyńska Lab for computational biology at RWTH Aachen."
  type="profile"
  jsonLd={jsonLd}
/>

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
