// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.bridgeaide.org',
  integrations: [sitemap()],
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
