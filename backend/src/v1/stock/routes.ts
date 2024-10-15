import { Router } from 'express'
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

apiV1StockRoutes.post(
  '/',
  core.middleware.asyncHandler(v1StockController.insertItem)
)

apiV1StockRoutes.get(
  '/:id',
  core.middleware.asyncHandler(v1StockController.getById)
)

apiV1StockRoutes.put(
  '/:id',
  core.middleware.asyncHandler(v1StockController.updateItem)
)

apiV1StockRoutes.delete(
  '/:id',
  core.middleware.asyncHandler(v1StockController.deleteById)
)
