import type { Response } from 'express'
import { ZodError } from 'zod'
import type { IResponseJson } from '../interfaces/index.js'

export const handleZodError = (err: ZodError, res: Response): void => {
  const validationErrors = err.errors.map((error) => ({
    title: 'Validation Error',
    msg: error.message,
    path: error.path.join('.')
  }))

  const statusCode = 412
  const apiResponse: IResponseJson = {
    okay: false,
    result: null,
    statusCode,
    messages: validationErrors
  }

  res.status(statusCode).json(apiResponse)
}
