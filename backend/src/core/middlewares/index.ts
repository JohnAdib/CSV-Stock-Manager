import { asyncHandler } from './async-handler.js'
import { customHeaders } from './custom-headers.js'
import { errorHandling } from './error-handling.js'
import { logRequests } from './log-requests.js'
import { notFound404 } from './not-found-404.js'

export const middleware = {
  notFound404,
  asyncHandler,
  customHeaders,
  errorHandling,
  logRequests
}
