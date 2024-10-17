import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import type { IError, IResponseJson } from '../interfaces/index.js'
import { logger } from '../logger/index.js'
import { handleZodError } from './zod-error-handling.js'

export const errorHandling = (
  err: IError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  if (err instanceof ZodError) {
    return handleZodError(err, res)
  }

  const defaultErrCode = 501
  const defaultErrTitle = 'Error (¬º-°)¬'
  const defaultErrMessage = 'Sorry, something went wrong!'

  const errTitle = err?.name || defaultErrTitle
  const errMessage = err?.message || defaultErrMessage
  const errStatusCode = err?.statusCode || defaultErrCode
  const errResult = err?.result || null
  const errMeta = err?.meta || undefined

  const isError = errStatusCode >= 500
  const errType = isError ? 'error' : undefined

  const apiResponse: IResponseJson = {
    okay: false,
    statusCode: errStatusCode,
    result: errResult,
    meta: errMeta,
    notification: {
      type: errType,
      title: errTitle,
      text: errMessage
    }
  }

  const logLevel = errType ?? 'verbose'
  logger.log(logLevel, errTitle, apiResponse)

  if (!err?.statusCode) {
    logger.debug(err.stack)
  }

  res.status(errStatusCode).json(apiResponse)
}
