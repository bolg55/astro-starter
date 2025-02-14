import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(155, 'For optimum SEO, the description should be 155 ch or less.'),
    author: z.string(),
    isDraft: z.boolean().default(false),
    publishedDate: z.date() || z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      src: z.string().url().optional(),
      alt: z.string().optional(),
    }),
  }),
});

const legalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(155, 'For optimum SEO, the description should be 155 ch or less.'),
  }),
});

const showcaseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(155, 'For optimum SEO, the description should be 155 ch or less.'),
  }),
});

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
  showcase: showcaseCollection,
};
