import { core } from '../../../../../core/index.js'
import { IStockItemAdd, IStockItemDb } from '../../../interfaces/index.js'

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
