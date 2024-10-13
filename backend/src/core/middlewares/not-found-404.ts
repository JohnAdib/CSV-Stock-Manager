import type { Request, Response } from 'express'
import { responseApiError404 } from '../responses/index.js'

export const notFound404 = (_req: Request, res: Response): void => {
  res.status(404).json(responseApiError404)
}
