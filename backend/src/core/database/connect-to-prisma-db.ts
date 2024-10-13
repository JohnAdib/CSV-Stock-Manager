import { PrismaClient } from '@prisma/client'
import { logger } from '../logger/index.js'

let prisma: PrismaClient | null = null

export async function connectToPrismaDb(): Promise<void> {
  logger.debug('⏱️  Connecting to Prisma...')

  if (prisma) {
    logger.debug(
      '🤷 Skipping DB connection! Prisma instance is already created!'
    )
    return
  }

  prisma = new PrismaClient()
  try {
    await prisma.$connect()
    logger.debug('🎯 Connected to Prisma! Warm up the dance floor!')
  } catch (error: unknown) {
    logger.error('💥 Error connecting to Prisma!', error)
    process.exit(1)
  }
}

export function getPrismaInstance(): PrismaClient {
  if (!prisma) {
    logger.error('Prisma instance is not connected!')
    process.exit(1)
  }

  return prisma
}
