import cors from 'cors'
import express, { type Application } from 'express'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'
import { logger } from '../logger/index.js'
import { middleware } from '../middlewares/index.js'
import { swaggerSpecs } from '../swagger/index.js'
import type { IServer } from './i-server.js'

export function fireHappyServer({ port = 3000, apiEndpoints }: IServer): void {
  const happyServer: Application = express()

  // disable etag caching to avoid 304 responses
  happyServer.disable('etag')

  // middlewares
  happyServer.use(cors())
  happyServer.use(helmet())
  happyServer.use(middleware.customHeaders)
  happyServer.use(express.json())
  happyServer.use(middleware.logRequests)

  // routes
  happyServer.use(apiEndpoints)

  // swagger documentation
  happyServer.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

  // error handling
  happyServer.use(middleware.errorHandling)
  happyServer.use(middleware.notFound404)

  // try to start the server
  try {
    happyServer.listen(port, () => {
      logger.verbose(`💃 Server is dancing at http://localhost:${port}`)
    })
  } catch (error) {
    // TODO: improve error handling to detect the error type
    logger.error('💥 Error on starting the server!', error)
    process.exit(1)
  }
}
