// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.itzomidreza.ir",

  // output رو عمداً "static" (پیش‌فرض) نگه داشتیم؛ فقط routeهایی مثل
  output: "server",
  // src/pages/api/contact.ts که خودشون prerender = false دارن on-demand رندر می‌شن
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
