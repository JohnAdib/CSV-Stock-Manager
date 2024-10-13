import { database } from './database/index.js'
import { error } from './errors/index.js'
import { logger } from './logger/index.js'
import { middleware } from './middlewares/index.js'
import { response } from './responses/index.js'
import { server } from './server/index.js'

// export all of interfaces
export * from './interfaces/index.js'

export const core = {
  database,
  error,
  logger,
  middleware,
  response,
  server
}
