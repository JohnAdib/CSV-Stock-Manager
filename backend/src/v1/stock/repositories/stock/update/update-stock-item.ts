import { core } from 'src/core/index.js'
import { IStockItemAdd } from '../../../interfaces/index.js'

interface IUpdateStockItemFullParams extends IStockItemAdd {
  id: number
}

export const updateStockItem = async ({
  id,
  sku,
  quantity,
  store,
  description
}: IUpdateStockItemFullParams): Promise<void> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const updatedItem = await prisma.stock.update({
      where: { id },
      data: {
        sku,
        quantity,
        store,
        description
      }
    })

    if (!updatedItem) {
      throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
    }
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
