// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
