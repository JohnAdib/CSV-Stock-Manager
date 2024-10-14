import { core } from '../../../../../core/index.js'
import { IStockItemDb } from '../../../interfaces/index.js'

interface IGetStockItemsParams {
  page?: number
  perPage?: number
  orderBy?: keyof IStockItemDb
  orderDirection?: 'asc' | 'desc'
}

export const getStockItems = async ({
  page = 0,
  perPage = 10,
  orderBy,
  orderDirection
}: IGetStockItemsParams): Promise<IStockItemDb[]> => {
  const skip = (page - 1) * perPage

  const prisma = core.database.prisma.getPrismaInstance()

  const orderClause =
    orderBy && orderDirection ? { [orderBy]: orderDirection } : undefined

  try {
    const stockItems = await prisma.stock.findMany({
      skip,
      take: perPage,
      orderBy: orderClause
    })

    return stockItems as IStockItemDb[]
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
