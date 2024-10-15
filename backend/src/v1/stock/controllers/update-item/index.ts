import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function updateItemController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = validation.parse(req.params)

  const serviceResult = await v1StockServices.getStockItemById({ id })

  const statusCode = 200
  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    meta: serviceResult.meta,
    statusCode: statusCode
  }

  res.status(statusCode).json(apiResponse)
}
