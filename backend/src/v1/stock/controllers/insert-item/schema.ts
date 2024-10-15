import { z } from 'zod'

export const validation = z
  .object({
    sku: z.string().min(1, { message: 'SKU is required' }),
    quantity: z
      .number()
      .min(0, { message: 'Quantity must be a non-negative number' }),
    store: z.string().min(1, { message: 'Store is required' }),
    description: z.string().nullable()
  })
  .strict()
