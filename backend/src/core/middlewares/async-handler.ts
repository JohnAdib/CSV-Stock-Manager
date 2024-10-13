import type { NextFunction, Request, Response } from 'express'

interface AsyncHandlerFunction {
  (req: Request, res: Response, next: NextFunction): Promise<void>
}

export const asyncHandler =
  (fn: AsyncHandlerFunction) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
