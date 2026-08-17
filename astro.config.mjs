// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.itzomidreza.ir",
  output: "server", // برای اینکه api/contact کار کنه لازمه بمونه
  adapter: vercel(),

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
