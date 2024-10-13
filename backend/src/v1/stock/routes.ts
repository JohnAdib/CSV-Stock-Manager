import { Router, type Request, type Response } from 'express'
import { core } from '../../core/index.js'
// import { middleware } from '../../core/middlewares/index.js'
// import { v1StockController } from './controllers/index.js';

export const apiV1StockRoutes: Router = Router()

// apiV1StockRoutes.post(
//   '/',
//   middleware.asyncHandler(v1StockController.create)
// )

apiV1StockRoutes.post('/upload', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})

apiV1StockRoutes.get('/', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiSample)
})

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
