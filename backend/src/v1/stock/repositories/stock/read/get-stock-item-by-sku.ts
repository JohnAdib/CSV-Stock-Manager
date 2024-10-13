import { core } from 'src/core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemBySkyParams {
  sku: string
}

export const getStockItemBySku = async ({
  sku
}: IGetStockItemBySkyParams): Promise<IStockItemDb> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const stockItem = await prisma.stock.findUnique({
      where: { sku }
    })

    if (!stockItem) {
      throw new core.error.client.NotFound(
        `Stock item with sku ${sku} not found`
      )
    }

    return stockItem
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
