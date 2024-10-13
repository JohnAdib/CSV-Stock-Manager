import { core } from './core/index.js'
import { apiEndpoints } from './routes.js'

// import ENV variables from .env file and assign them to process.env
import 'dotenv/config'

const port = process.env.PORT || 7011

;(async function main() {
  try {
    await core.database.connectToPrismaDb()
    core.server.fireHappyServer({ port, apiEndpoints })
  } catch (error: unknown) {
    core.logger.error('Runtime exception', error)
  }
})()
