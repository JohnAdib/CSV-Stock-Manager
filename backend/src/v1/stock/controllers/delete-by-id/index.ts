import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function deleteByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = validation.parse(req.params)

  const serviceResult = await v1StockServices.deleteStockItemById({ id })

  const statusCode = 200
  const apiResponse: IResponseJson = {
    okay: true,
    statusCode: statusCode,
    result: serviceResult.data,
    meta: serviceResult.meta,
    notification: {
      text: 'Stock item ' + id + ' successfully deleted!',
      type: 'success'
    }
  }

  res.status(statusCode).json(apiResponse)
}
