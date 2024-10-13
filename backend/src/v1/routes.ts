import { Router, type Request, type Response } from 'express'
import { responseApiV1 } from '../core/responses/index.js'

export const apiV1Endpoints: Router = Router()

apiV1Endpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(responseApiV1)
})
