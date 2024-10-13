import type { Request, Response } from 'express'
import { core } from '../index.js'

export const notFound404 = (_req: Request, res: Response): void => {
  res.status(404).json(core.response.responseApiError404)
}
