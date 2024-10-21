import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function updateItem(req: Request, res: Response): Promise<void> {
  const item = validation.parse(req.body)

  const serviceResult = await v1StockServices.updateItem({ item })

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
