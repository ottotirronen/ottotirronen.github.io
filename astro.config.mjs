// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

//https://astro.build/config
export default defineConfig({
  site: "https://ottotirronen.github.io",
  integrations: [preact()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
