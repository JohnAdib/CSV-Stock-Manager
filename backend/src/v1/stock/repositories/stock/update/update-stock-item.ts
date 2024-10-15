import { core } from '../../../../../core/index.js'
import { IStockItemUpdate } from '../../../interfaces/index.js'

export const updateStockItem = async ({
  id,
  sku,
  quantity,
  store,
  description
}: IStockItemUpdate): Promise<IStockItemUpdate> => {
  const prisma = core.database.prisma.getPrismaInstance()
  let updatedItem = null

  try {
    updatedItem = await prisma.stock.update({
      where: { id },
      data: {
        sku,
        quantity,
        store,
        description
      }
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  if (!updatedItem) {
    throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
  }

  return updatedItem
}
