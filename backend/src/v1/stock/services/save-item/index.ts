import { IServiceResult } from '../../../../core/index.js'
import { IStockItemAdd } from '../../interfaces/i-stock-item-add.js'
import { IStockItemDb } from '../../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../../repositories/index.js'

interface IServiceSaveItem {
  item: IStockItemAdd
}

export async function saveItem({
  item
}: IServiceSaveItem): Promise<IServiceResult<IStockItemDb>> {
  const dbData: IStockItemDb = await v1StockRepository.stock.saveStockItem(item)

  const apiResponse: IServiceResult<IStockItemDb> = {
    data: dbData
  }

  return apiResponse
}
