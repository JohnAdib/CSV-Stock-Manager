import { core, IServiceResult } from '../../../core/index.js'
import { IStockItemDb } from '../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../repositories/index.js'

interface IServiceGetAll {
  page: number
  limit: number
}

export async function getAll({
  page,
  limit
}: IServiceGetAll): Promise<IServiceResult<IStockItemDb>> {
  const totalItemsCount =
    await v1StockRepository.stock.read.getStockItemsCounts()

  const dbData: IStockItemDb[] =
    await v1StockRepository.stock.read.getStockItems({
      page,
      limit
    })

  const apiResponse: IServiceResult<IStockItemDb> = core.helpers.paginate({
    data: dbData,
    totalCount: totalItemsCount,
    currentPage: page,
    perPage: limit
  })

  return apiResponse
}
