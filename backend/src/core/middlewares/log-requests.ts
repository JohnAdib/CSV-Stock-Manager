import type { NextFunction, Request, Response } from 'express'
import { logger } from '../logger/index.js'

const getStatusEmoji = (statusCode: number): string => {
  if (statusCode >= 100 && statusCode < 200) {
    return '🟣'
  } else if (statusCode >= 200 && statusCode < 300) {
    return '✅'
  } else if (statusCode >= 300 && statusCode < 400) {
    return '🔀'
  } else if (statusCode >= 400 && statusCode < 500) {
    return '🟡'
  } else if (statusCode >= 500) {
    return '🆘'
  }
  return '💯'
}

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
      const statusEmoji = getStatusEmoji(res.statusCode)
      const statusCode = colorBlue + res.statusCode + colorReset
      const reqMethod = colorBright + req.method + colorReset
      const responseTime = colorDim + reqDuration + colorReset
      const reqUrl = colorCyan + req.originalUrl + colorReset

      const logMsg = `${statusEmoji} ${statusCode} ${reqMethod} ${responseTime} ${reqUrl}`

      logger.info(logMsg, {
        ip: req.ip
      })
    })
    next()
  }
}
