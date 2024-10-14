import { IServiceResult } from '../../../core/index.js'
import { IStockItemUpdate } from '../interfaces/index.js'
import { v1StockRepository } from '../repositories/index.js'

interface IServiceUpdateStockItem {
  item: IStockItemUpdate
}

export async function updateStockItem({
  item
}: IServiceUpdateStockItem): Promise<IServiceResult<IStockItemUpdate>> {
  const dbData: IStockItemUpdate =
    await v1StockRepository.stock.update.updateStockItem(item)

  const apiResponse: IServiceResult<IStockItemUpdate> = {
    data: dbData
  }

  return apiResponse
}
