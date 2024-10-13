import { connectToMongoDb } from './connect-to-mongo-db.js'
import { connectToPrismaDb, getPrismaInstance } from './connect-to-prisma-db.js'

export const database = {
  connectToMongoDb,
  connectToPrismaDb,
  getPrismaInstance
}
