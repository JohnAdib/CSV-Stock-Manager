import { z } from 'zod'

export const validation = z
  .object({
    id: z
      .string()
      .transform((val) => parseInt(val, 10))
      .refine((val) => !isNaN(val) && val >= 1, {
        message: 'ID must be a valid positive number'
      })
  })
  .strict()
