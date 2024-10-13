import { connectToMongoDb } from './mongoose/index.js'
import { connectToPrismaDb, getPrismaInstance } from './prisma/index.js'

export const database = {
  prisma: {
    connectToPrismaDb,
    getPrismaInstance
  },
  mongoose: {
    connectToMongoDb
  }
}
