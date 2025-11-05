// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jscamposx.dev', // Actualiza con tu URL real
  // @ts-expect-error: View transitions flag is available in Astro 5.x but missing in the shipped d.ts
  viewTransitions: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
