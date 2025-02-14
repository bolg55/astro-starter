// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/readingTime';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://eightynineinnovations.com',
  integrations: [react(), tailwind(), sitemap(), robotsTxt(), icon(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkGfm],
    rehypePlugins: [],
  },
});
