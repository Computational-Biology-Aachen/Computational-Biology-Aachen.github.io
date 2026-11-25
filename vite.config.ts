import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { existsSync } from "fs";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const designSrc = new URL("../../pkg-js/design/src/lib", import.meta.url)
  .pathname;

const designAlias: Record<string, string> = existsSync(designSrc)
  ? { "@computational-biology-aachen/design": designSrc }
  : {};

export default defineConfig({
  resolve: { alias: designAlias },
  plugins: [
    mdsvex({
      extensions: [".md"],
      templates: {
        default: "./src/lib/mdpages/BlogLayout.svelte",
        tutorials: "./src/lib/mdpages/TutorialLayout.svelte",
      },
      // 0.x picked a named layout by folder name; templates need it explicitly.
      select_template: (id) =>
        id.includes("/tutorials/") ? "tutorials" : undefined,
      smart_punctuation: true,
    }),
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess()],
      adapter: adapter({
        pages: "build",
        assets: "build",
        precompress: false,
        strict: true,
        fallback: "404.html",
      }),

      prerender: {
        // Machine-readable files no page links to.
        entries: [
          "*",
          "/robots.txt",
          "/sitemap.xml",
          "/llms.txt",
          "/llms-full.txt",
          "/rss.xml",
          "/.well-known/security.txt",
        ],
      },

      version: {
        // Poll for new deploys so long-lived tabs upgrade proactively instead of
        // only recovering reactively after a failed navigation.
        pollInterval: 300_000,
      },
    }),
  ],
  server: { port: 5174, strictPort: true },
});
