import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";
import * as path from "node:path";

// https://astro.build/configg
export default defineConfig({
  site: "https://robertwl.my.id",
  integrations: [react(), tailwind(), sitemap()],
  output: "server",

  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
