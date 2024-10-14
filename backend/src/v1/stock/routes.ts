import { Router, type Request, type Response } from 'express'
import { core } from '../../core/index.js'
import { v1StockController } from './controllers/index.js'

export const apiV1StockRoutes: Router = Router()

const csvUploadMiddleware = core.middleware.fileUpload({
  allowedExtensions: ['csv'],
  maxFileSizeMB: 5,
  fieldName: 'csv',
  destinationPath: 'uploads/'
})

apiV1StockRoutes.post(
  '/upload',
  csvUploadMiddleware,
  core.middleware.asyncHandler(v1StockController.uploadCsv)
)

apiV1StockRoutes.get(
  '/',
  core.middleware.asyncHandler(v1StockController.getAll)
)

apiV1StockRoutes.post('/', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})

apiV1StockRoutes.get('/:id', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})

apiV1StockRoutes.put('/:id', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})

apiV1StockRoutes.delete('/:id', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})
