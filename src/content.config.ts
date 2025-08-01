import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection
const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // có thể auto generate nếu không khai báo
    date: z.coerce.date(), // Use coerce.date() for better date parsing
    description: z.string(),
    image: z.string(),
    readTime: z.string(),
    keywords: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false), // Set default value
  }),
});

// Product collection
const productCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/products',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    brand: z.string(),
    price: z.number(),
    priceSale: z.number().optional(),
    description: z.string(),
    images: z.array(z.string()),
    keywords: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
    originalPrice: z.number().optional(),
    discount: z.number().optional(),
    shipping: z.string().optional(),
    warranty: z.string().optional(),
    returnPolicy: z.string().optional(),
    keyFeatures: z.array(z.string()).optional(),
    includedItems: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  products: productCollection,
};
