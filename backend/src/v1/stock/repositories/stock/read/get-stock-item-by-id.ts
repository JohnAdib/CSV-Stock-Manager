import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemByIdParams {
  id: number
}

export const getStockItemById = async ({
  id
}: IGetStockItemByIdParams): Promise<IStockItemDb> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const stockItem = await prisma.stock.findUnique({
      where: { id }
    })

    if (!stockItem) {
      throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
    }

    return stockItem
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
