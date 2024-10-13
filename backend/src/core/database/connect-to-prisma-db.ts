import { PrismaClient } from '@prisma/client'
import { logger } from '../logger/index.js'

const prisma = new PrismaClient()

export async function connectToPrismaDb(): Promise<void> {
  logger.verbose('Connecting to Prisma...')

  await prisma
    .$connect()
    .then(() => {
      logger.info('Connected to Prisma! Warm up the dance floor!')
    })
    .catch((error: unknown) => {
      logger.error('Error connecting to Prisma! 💥', error)
      process.exit(1)
    })
}
