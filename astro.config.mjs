import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    vite: {
      publicDir: 'src/assets',// Static files.
    },
    integrations: [// Enable Preact to support Preact JSX components.
    react(), sitemap(), tailwind()],
    site: `https://johannesmerwe.com`
});