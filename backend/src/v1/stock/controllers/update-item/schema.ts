import { z } from 'zod'

export const validation = z.object({
  id: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: 'ID must be a valid number' })
    .refine((val) => val > 0, { message: 'ID must be a positive number' }),
  sku: z.string().min(1, { message: 'SKU is required' }),
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be a non-negative number' }),
  store: z.string().min(1, { message: 'Store is required' }),
  description: z.string().optional().or(z.literal('')).nullable()
})
