import { Router, type Request, type Response } from 'express'
import { core } from './core/index.js'
import { apiV1Endpoints } from './v1/routes.js'

export const apiEndpoints: Router = Router()

apiEndpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(core.response.responseApiHello)
})

apiEndpoints.use('/v1', apiV1Endpoints)
