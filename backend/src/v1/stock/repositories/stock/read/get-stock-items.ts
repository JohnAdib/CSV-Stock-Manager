import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemsParams {
  skip?: number
  take?: number
  orderBy?: keyof IStockItemDb
  orderDirection?: 'asc' | 'desc'
}

export const getStockItems = async ({
  skip = 0,
  take = 10,
  orderBy,
  orderDirection
}: IGetStockItemsParams): Promise<IStockItemDb[]> => {
  const prisma = core.database.prisma.getPrismaInstance()

  const orderClause =
    orderBy && orderDirection ? { [orderBy]: orderDirection } : undefined

  try {
    const stockItems = await prisma.stock.findMany({
      skip,
      take,
      orderBy: orderClause
    })

    return stockItems as IStockItemDb[]
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
