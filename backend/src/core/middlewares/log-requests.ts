import type { NextFunction, Request, Response } from 'express'
import { logItPretty } from 'log-it-pretty'
import { logger } from '../logger/index.js'

export const logRequests = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  {
    const startTime = process.hrtime()

    res.on('finish', () => {
      const logMsg = logItPretty({
        statusCode: res.statusCode,
        method: req.method,
        url: req.originalUrl,
        startTime
      })

      logger.info(logMsg, {
        ip: req.ip
      })
    })
    next()
  }
}
