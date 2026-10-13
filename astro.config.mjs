// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PAGES_SITE || 'https://www.bridgeaide.org',
  base: process.env.PAGES_BASE || '/',
  integrations: [sitemap()],
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
