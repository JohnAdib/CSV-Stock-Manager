import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function getAllController(
  req: Request,
  res: Response
): Promise<void> {
  const { page, perPage } = validation.parse(req.query)

  const serviceResult = await v1StockServices.getAll({ page, perPage })

  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    meta: serviceResult.meta,
    statusCode: 200
  }

  if (serviceResult.data === null) {
    apiResponse.messages = [
      {
        type: 'info',
        msg: 'No Items Found!'
      }
    ]
  }

  res.status(200).json(apiResponse)
}
