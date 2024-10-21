import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function getAll(req: Request, res: Response): Promise<void> {
  const { page, limit } = validation.parse(req.query)

  const serviceResult = await v1StockServices.getAll({ page, limit })

  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    meta: serviceResult.meta,
    statusCode: 200
  }

  if (serviceResult.data === null) {
    apiResponse.notification = {
      type: 'info',
      text: 'No Items Found!'
    }
  }

  res.status(200).json(apiResponse)
}
