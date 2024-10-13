import { core } from 'src/core/index.js'
import { IStockItemAdd } from '../interfaces/i-stock-item-add.js'
import { IStockItemDb } from '../interfaces/i-stock-item-db.js'

export const saveStockItem = async ({
  sku,
  quantity,
  store,
  description,
  csvFileId
}: IStockItemAdd): Promise<IStockItemDb> => {
  const prismaInstance = await core.database.prisma.getPrismaInstance()
  try {
    const result = await prismaInstance.stock.upsert({
      where: { sku },
      update: {
        quantity,
        store,
        description,
        csvFileId
      },
      create: {
        sku,
        quantity,
        store,
        description,
        csvFileId
      }
    })
    return result
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
