import { core, IServiceResult } from '../../../../core/index.js'
import { IStockItemDb } from '../../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../../repositories/index.js'

interface IServiceGetAll {
  page: number
  perPage: number
}

export async function getAll({
  page,
  perPage
}: IServiceGetAll): Promise<IServiceResult<IStockItemDb>> {
  const dbData = await v1StockRepository.stock.read.getStockItems({
    page,
    perPage
  })

  const apiResponse: IServiceResult<IStockItemDb> = core.helpers.paginate({
    data: dbData,
    totalCount: dbData.length,
    currentPage: page,
    perPage
  })

  return apiResponse
}
