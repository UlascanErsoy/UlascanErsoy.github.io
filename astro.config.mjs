import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ulascanersoy.github.io',
  base: 'UlascanErsoy.github.io',
  integrations: [mdx(), sitemap(), tailwind()]
});
