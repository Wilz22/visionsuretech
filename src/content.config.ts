import { defineCollection } from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';
import { solutionCategoryIds } from './data/solutionCategories';

const solutions = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/solutions',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    order: z.number().int().positive(),
    systemCode: z.string().regex(/^VST-S\d{4}$/),
    category: z.enum(solutionCategoryIds),
    summary: z.string(),
    cardTags: z.array(z.string()).min(1).max(3),
    features: z.array(z.string()).min(1),
    specifications: z.array(z.object({ label: z.string(), value: z.string() })).min(1),
    components: z.array(z.object({
      code: z.string(),
      description: z.string(),
      availability: z.enum(['included', 'choice', 'optional']).default('included'),
    })).min(1),
    applications: z.array(z.string()).min(1),
    notes: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
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
