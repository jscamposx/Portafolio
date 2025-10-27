// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // @ts-expect-error: View transitions flag is available in Astro 5.x but missing in the shipped d.ts
  viewTransitions: true,
  vite: {
    plugins: [tailwindcss()]
  }
});