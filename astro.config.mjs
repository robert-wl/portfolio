import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://robertwl.my.id",
  integrations: [react(), tailwind(), sitemap()],
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
