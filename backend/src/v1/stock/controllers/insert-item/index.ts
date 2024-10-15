import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function insertItemController(
  req: Request,
  res: Response
): Promise<void> {
  const item = validation.parse(req.body)

  const serviceResult = await v1StockServices.saveStockItem({ item })

  const statusCode = 201
  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    meta: serviceResult.meta,
    statusCode
  }

  res.status(statusCode).json(apiResponse)
}
