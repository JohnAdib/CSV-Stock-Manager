import { z } from 'zod'

export const uploadFileSchema = z.object({
  fileName: z.string().min(1, { message: 'File name is required' }),
  fileSize: z
    .number()
    .max(5 * 1024 * 1024, { message: 'File size must not exceed 5MB' }),
  mimeType: z.enum(['text/csv'], { message: 'Only CSV files are allowed' })
})
