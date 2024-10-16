import { IServiceResult } from '../../../core/index.js'
import { IStockItemDb } from '../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../repositories/index.js'

interface IServiceGetStockItemById {
  id: number
}

export async function getStockItemById({
  id
}: IServiceGetStockItemById): Promise<IServiceResult<IStockItemDb>> {
  const dbData: IStockItemDb =
    await v1StockRepository.stock.read.getStockItemById({
      id
    })

  const apiResponse: IServiceResult<IStockItemDb> = {
    data: dbData
  }

  return apiResponse
}
