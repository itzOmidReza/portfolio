import { defineCollection, z } from "astro:content";

const localized = z.object({
  fa: z.string(),
  en: z.string(),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: localized,
    images: z.array(z.string().url()),
    tech: z.array(z.string()),
    category: z.string(),
    link: z.string().url(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: "data",
  schema: z.object({
    company: z.string(),
    role: localized,
    period: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    type: z.enum(["freelance", "contract", "education"]),
    description: localized,
    skills: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().url().optional(),
    quote: localized,
  }),
});

const skills = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    level: z.number().min(0).max(100).optional(),
    category: z.enum(["frontend", "backend", "data-ai", "tools"]),
  }),
});

export const collections = { projects, experience, testimonials, skills };