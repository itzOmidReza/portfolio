// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.itzomidreza.ir",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});