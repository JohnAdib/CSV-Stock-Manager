import type { NextFunction, Request, Response } from 'express'
import { logger } from '../logger/index.js'
import { mapStatusToDetailEmoji } from './map-status-to-detail-emoji.js'
import { mapStatusToEmoji } from './map-status-to-emoji.js'

export const logRequests = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  {
    const reqStartAt = process.hrtime()

    res.on('finish', () => {
      // calculate response time
      const reqEndAt = process.hrtime(reqStartAt)
      const reqDurationMs = reqEndAt[0] * 1e3 + reqEndAt[1] * 1e-6
      const reqDuration = (reqDurationMs / 1000).toFixed(3) + 's'

      // console colors
      const colorReset = '\x1b[0m'
      const colorDim = '\x1b[2m'
      const colorBright = '\x1b[1m'
      const colorBlue = '\x1b[34m'
      const colorCyan = '\x1b[36m'

      // message
      const statusEmoji = mapStatusToEmoji(res.statusCode)
      const statusCode = colorBlue + res.statusCode + colorReset
      const statusDetailEmoji = mapStatusToDetailEmoji(res.statusCode)
      const reqMethod = colorBright + req.method + colorReset
      const responseTime = colorDim + reqDuration + colorReset
      const reqUrl = colorCyan + req.originalUrl + colorReset

      const logMsg = `${statusEmoji} ${statusCode} ${statusDetailEmoji} ${reqMethod} ${responseTime} ${reqUrl}`

      logger.info(logMsg, {
        ip: req.ip
      })
    })
    next()
  }
}
