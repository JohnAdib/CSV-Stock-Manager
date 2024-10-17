import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemsParams {
  page?: number
  limit?: number
  orderBy?: keyof IStockItemDb
  orderDirection?: 'asc' | 'desc'
}

export const getStockItems = async ({
  page = 0,
  limit = 10,
  orderBy,
  orderDirection
}: IGetStockItemsParams): Promise<IStockItemDb[]> => {
  const skip = (page - 1) * limit

  const prisma = core.database.prisma.getPrismaInstance()

  const orderClause =
    orderBy && orderDirection ? { [orderBy]: orderDirection } : undefined

  let stockItems = null
  try {
    stockItems = await prisma.stock.findMany({
      skip,
      take: limit,
      orderBy: orderClause
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  return stockItems as IStockItemDb[]
}
