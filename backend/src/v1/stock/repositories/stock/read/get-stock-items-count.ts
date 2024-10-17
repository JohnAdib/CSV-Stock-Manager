import { core } from '../../../../../core/index.js'

export const getStockItemsCounts = async (): Promise<number> => {
  const prisma = core.database.prisma.getPrismaInstance()

  let stockItemsCount = null
  try {
    stockItemsCount = await prisma.stock.count()
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  return stockItemsCount as number
}
