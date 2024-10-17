import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function updateItemController(
  req: Request,
  res: Response
): Promise<void> {
  const { id, sku, quantity, store, description } = validation.parse(req.body)

  console.log('data', sku, quantity, store, description)

  // TOOD: Update the item in the database
  const serviceResult = await v1StockServices.getStockItemById({ id })

  const statusCode = 200
  const apiResponse: IResponseJson = {
    okay: true,
    statusCode: statusCode,
    result: serviceResult.data,
    meta: serviceResult.meta,
    notification: {
      text: 'Item successfully updated!',
      type: 'success'
    }
  }

  res.status(statusCode).json(apiResponse)
}
