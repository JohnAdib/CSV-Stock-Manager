import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemByIdParams {
  id: number
}

export const getStockItemById = async ({
  id
}: IGetStockItemByIdParams): Promise<IStockItemDb> => {
  const prisma = core.database.prisma.getPrismaInstance()
  let stockItem: IStockItemDb | null = null

  try {
    stockItem = await prisma.stock.findUnique({
      where: { id }
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  if (!stockItem) {
    throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
  }

  return stockItem
}
