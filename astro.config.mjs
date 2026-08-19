import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://www.forbidden-city-tour.com",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});