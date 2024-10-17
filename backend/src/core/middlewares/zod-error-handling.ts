import type { Response } from 'express'
import { ZodError } from 'zod'
import type { IResponseJson } from '../interfaces/index.js'

export const handleZodError = (err: ZodError, res: Response): void => {
  // const validationErrors = err.errors.map((error) => ({
  //   title: 'Validation Error',
  //   text: error.message,
  //   path: error.path.join('.')
  // }))

  const validationErrors = err.errors.reduce(
    (acc: Record<string, string>, error) => {
      const path = error.path.join('.')
      acc[path] = error.message
      return acc
    },
    {}
  )

  const statusCode = 412
  const apiResponse: IResponseJson = {
    okay: false,
    result: null,
    statusCode,
    notification: {
      title: 'Validation Error',
      text: 'Please correct the validation errors and try again.',
      type: 'error'
    },
    validation: validationErrors
  }

  res.status(statusCode).json(apiResponse)
}
