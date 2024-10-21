import type { Request, Response } from 'express'
import { IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'
import { validation } from './schema.js'

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = validation.parse(req.params)

  const serviceResult = await v1StockServices.getById({ id })

  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    meta: serviceResult.meta,
    statusCode: 200
  }

  res.status(200).json(apiResponse)
}
