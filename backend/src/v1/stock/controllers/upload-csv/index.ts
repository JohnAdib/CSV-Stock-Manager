import type { Request, Response } from 'express'
import { core, IResponseJson } from '../../../../core/index.js'
import { v1StockServices } from '../../services/index.js'

export async function uploadCsvController(
  req: Request,
  res: Response
): Promise<void> {
  if (!req.file) {
    throw new core.error.client.UnprocessableEntity(
      `File not found! Please upload a file.`
    )
  }

  const serviceResult = await v1StockServices.uploadCSV(req.file)

  const statusCode = 201
  const apiResponse: IResponseJson = {
    okay: true,
    result: serviceResult.data,
    statusCode
  }

  res.status(statusCode).json(apiResponse)
}
