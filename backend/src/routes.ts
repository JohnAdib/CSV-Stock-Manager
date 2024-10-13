import { Router, type Request, type Response } from 'express'
import { responseApiHello } from './core/responses/index.js'
import { apiV1Endpoints } from './v1/routes.js'

export const apiEndpoints: Router = Router()

apiEndpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(responseApiHello)
})

apiEndpoints.use('/v1', apiV1Endpoints)
