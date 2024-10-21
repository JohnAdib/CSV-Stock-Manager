import { IServiceResult } from '../../../../core/index.js'
import { IStockItemDb } from '../../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../../repositories/index.js'

interface IServiceDeleteById {
  id: number
}

export async function deleteById({
  id
}: IServiceDeleteById): Promise<IServiceResult<IStockItemDb>> {
  await v1StockRepository.stock.getStockItemById({
    id
  })

  await v1StockRepository.stock.deleteStockItemById({
    id
  })

  const apiResponse: IServiceResult<IStockItemDb> = {
    data: null
  }

  return apiResponse
}
