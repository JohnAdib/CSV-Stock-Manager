import { z } from 'zod'

export const validation = z
  .object({
    skip: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 0))
      .refine((val) => val >= 0, { message: 'Skip must be a positive number' }),

    take: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 10))
      .refine((val) => val > 0, { message: 'Take must be a positive number' })
  })
  .strict()
