import { Router, type Request, type Response } from 'express'
import { core } from '../core/index.js'
import { apiV1StockRoutes } from './stock/routes.js'

export const apiV1Endpoints: Router = Router()

apiV1Endpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiV1)
})

apiV1Endpoints.use('/stock', apiV1StockRoutes)
