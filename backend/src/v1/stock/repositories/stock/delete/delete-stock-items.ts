import { core } from '../../../../../core/index.js'

export const deleteAllStockItems = async (): Promise<void> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    await prisma.stock.deleteMany()
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
