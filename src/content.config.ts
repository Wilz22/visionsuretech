import { defineCollection } from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const solutions = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/solutions',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    order: z.number().int().positive(),
    summary: z.string(),
    cardTags: z.array(z.string()).min(1).max(3),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  solutions,
};
