import type { Request, Response } from 'express'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function getAllController(
  req: Request,
  res: Response
): Promise<void> {
  const { skip, take } = validation.parse(req.query)

  const apiResponse = await v1StockServices.getAll({ skip, take })

  res.status(200).json(apiResponse)
}
