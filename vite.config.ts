import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex, type MdsvexOptions } from "mdsvex";
import { createHighlighter } from "shiki";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const designSrc = new URL("../../pkg-js/design/src/lib", import.meta.url)
  .pathname;

const designAlias: Record<string, string> = existsSync(designSrc)
  ? { "@computational-biology-aachen/design": designSrc }
  : {};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const layouts_dir = join(__dirname, "./src/lib/mdpages");

const highlighter = await createHighlighter({
  themes: ["poimandres"],
  langs: ["javascript", "typescript", "python"],
});

const mdsvexOptions: MdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: (code, lang = "text") => {
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang: lang ?? "text",
          theme: "poimandres",
        }),
      );
      return `{@html \`${html}\` }`;
    },
  },
  layout: {
    tutorials: join(layouts_dir, "TutorialLayout.svelte"),
    _: join(layouts_dir, "BlogLayout.svelte"),
  },
};

export default defineConfig({
  resolve: { alias: designAlias },
  plugins: [
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
      adapter: adapter({
        pages: "build",
        assets: "build",
        precompress: false,
        strict: true,
        fallback: "404.html",
      }),

      version: {
        // Poll for new deploys so long-lived tabs upgrade proactively instead of
        // only recovering reactively after a failed navigation.
        pollInterval: 300_000,
      },
    }),
  ],
  server: { port: 5174, strictPort: true },
});
