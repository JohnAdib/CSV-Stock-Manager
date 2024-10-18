import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemBySkyParams {
  sku: string
}

export const getStockItemBySku = async ({
  sku
}: IGetStockItemBySkyParams): Promise<IStockItemDb | null> => {
  const prisma = core.database.prisma.getPrismaInstance()
  let stockItem: IStockItemDb | null = null

  try {
    stockItem = await prisma.stock.findUnique({
      where: { sku }
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  return stockItem
}
