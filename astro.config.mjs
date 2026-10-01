import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.visionsuretech.ca",
  trailingSlash: 'always',
  integrations: [sitemap({filter: (page) => ['/', '/products/', '/solutions/', '/quote/', '/contact/'].includes(new URL(page).pathname)})],

  vite: {
    plugins: [tailwindcss()],
  },
});