import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { productCategoryIds } from './data/catalogCategories';
import { resolveProductData } from './lib/product-content';
import { resolveProjectData } from './lib/project-content';

const projectEditorialSchema = z
  .object({
    locale: z.enum(['en']),
    projectId: z.string(),
    title: z.string().min(1),
    summary: z.string().min(1),
    client: z.string().optional(),
    location: z.string().optional(),
    equipment: z.string().optional(),
    challenge: z.string().min(1),
    approach: z.string().min(1),
    installation: z.array(z.string().min(1)).min(1),
    results: z.array(z.string().min(1)).min(1),
    systems: z
      .array(z.object({ code: z.string(), note: z.string().min(1) }))
      .min(1),
    photos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().min(1),
          caption: z.string().min(1),
        }),
      )
      .default([]),
  })
  .strict();

const productEditorialSchema = z
  .object({
    locale: z.enum(['en']),
    systemCode: z.string(),
    title: z.string(),
    summary: z.string(),
    cardTags: z.array(z.string()),
    features: z.array(z.string()),
    specifications: z.array(z.object({ id: z.string(), label: z.string() })),
    components: z.array(
      z.object({ code: z.string(), description: z.string() }),
    ),
    applications: z.array(z.string()),
    notes: z.array(z.string()).default([]),
    imageAlt: z.string().optional(),
    galleryAlts: z.array(z.string()).default([]),
    specSheetLabel: z.string().optional(),
    seo: z.object({ title: z.string(), description: z.string() }),
  })
  .strict();

const products = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/products',
  }),
  schema: z.preprocess(
    (raw) => resolveProductData(productEditorialSchema.parse(raw)),
    z.object({
      locale: z.enum(['en']),
      title: z.string(),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      order: z.number().int().positive(),
      systemCode: z.string().regex(/^VST-S\d{4}$/),
      category: z.enum(productCategoryIds),
      catalogClass: z.enum([
        'SEE',
        'RECORD',
        'SURROUND',
        'SENSE',
        'CONNECT',
        'SPECIALTY',
      ]),
      contentStatus: z.enum(['reference', 'verified']).default('reference'),
      gallery: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
            width: z.number().positive(),
            height: z.number().positive(),
          }),
        )
        .default([]),
      specSheet: z
        .object({ href: z.string(), label: z.string().optional() })
        .optional(),
      summary: z.string(),
      cardTags: z.array(z.string()).min(1).max(3),
      features: z.array(z.string()).min(1),
      specifications: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1),
      components: z
        .array(
          z.object({
            code: z.string(),
            description: z.string(),
            availability: z
              .enum(['included', 'choice', 'optional'])
              .default('included'),
          }),
        )
        .min(1),
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
  ),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.preprocess(
    (raw) => resolveProjectData(projectEditorialSchema.parse(raw)),
    z.object({
      locale: z.enum(['en']),
      title: z.string().min(1),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      order: z.number().int().positive(),
      status: z.enum(['reference', 'published']).default('reference'),
      draft: z.boolean().default(false),
      industry: z.string().min(1),
      summary: z.string().min(1),
      client: z.string().optional(),
      location: z.string().optional(),
      equipment: z.string().optional(),
      completed: z.string().optional(),
      challenge: z.string().min(1),
      approach: z.string().min(1),
      installation: z.array(z.string().min(1)).min(1),
      results: z.array(z.string().min(1)).min(1),
      systems: z
        .array(
          z.object({
            code: z.string().regex(/^VST-S\d{4}$/),
            note: z.string().min(1),
          }),
        )
        .min(1),
      photos: z
        .array(
          z.object({
            src: z.string().startsWith('/images/projects/'),
            alt: z.string().min(1),
            width: z.number().int().positive(),
            height: z.number().int().positive(),
            caption: z.string().min(1),
          }),
        )
        .default([]),
    }),
  ),
});

export const collections = {
  products,
  projects,
};
