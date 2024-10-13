import mongoose from 'mongoose'
import { logger } from '../../logger/index.js'

export async function connectToMongoDb(
  dbUri: string | undefined
): Promise<void> {
  logger.debug('⏱️ Connecting to MongoDB. ' + dbUri)
  if (!dbUri) {
    logger.warn('🤷 Skipping DB connection! URI is not provided!')
    return
  }

  await mongoose
    .connect(dbUri)
    .then(() => {
      logger.debug('🎯 Connected to Db! Warm up the dance floor!')
    })
    .catch((error: unknown) => {
      logger.error('💥 Error connecting to MongoDB!', error)
      process.exit(1)
    })
}
