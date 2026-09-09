import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The writing feed launches empty and grows with the reps.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
