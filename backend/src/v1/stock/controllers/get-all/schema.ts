import { z } from 'zod'

export const validation = z
  .object({
    page: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 1))
      .refine((val) => val >= 1, { message: 'Page must be a positive number' }),

    limit: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 10))
      .refine((val) => val > 0, {
        message: 'limit must be a positive number'
      })
  })
  .strict()
