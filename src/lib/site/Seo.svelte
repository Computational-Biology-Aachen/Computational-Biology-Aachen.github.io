<script lang="ts">
  import { page } from "$app/state";
  import * as config from "#lib/config.js";
  import { absoluteUrl } from "#lib/site/url.js";

  let {
    title,
    description = config.description,
    type = "website",
    jsonLd,
  }: {
    // Page name; omitted on the home page.
    title?: string;
    description?: string;
    type?: "website" | "article" | "profile";
    jsonLd?: Record<string, unknown>;
  } = $props();

  const fullTitle = $derived(
    title ? `${title} - Matuszyńska Lab` : config.title,
  );
  const canonical = $derived(absoluteUrl(page.url.pathname));
  // Split so neither the Svelte parser nor the JSON can close a script tag early.
  const scriptClose = "<" + "/script>";
  const ldScript = $derived(
    jsonLd &&
      `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        ...jsonLd,
      }).replace(/</g, "\\u003c")}${scriptClose}`,
  );
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta
    name="description"
    content={description}
  />
  <link
    rel="canonical"
    href={canonical}
  />
  <meta
    property="og:title"
    content={title ?? config.title}
  />
  <meta
    property="og:description"
    content={description}
  />
  <meta
    property="og:url"
    content={canonical}
  />
  <meta
    property="og:type"
    content={type}
  />
  {#if ldScript}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html ldScript}
  {/if}
</svelte:head>
