import { core, IServiceResult } from '../../../core/index.js'
import { IStockItemUpdate } from '../interfaces/index.js'
import { v1StockRepository } from '../repositories/index.js'

interface IServiceUpdateStockItem {
  item: IStockItemUpdate
}

export async function updateStockItem({
  item
}: IServiceUpdateStockItem): Promise<IServiceResult<IStockItemUpdate>> {
  // check the new sku is unique
  const existingItem = await v1StockRepository.stock.read.getStockItemBySku({
    sku: item.sku
  })
  // if user try to change to new sku that already exists
  if (existingItem && existingItem.id !== item.id) {
    throw new core.error.client.Conflict(
      `Stock item with sku ${item.sku} already exists`
    )
  }

  const dbData: IStockItemUpdate =
    await v1StockRepository.stock.update.updateStockItem(item)

  const apiResponse: IServiceResult<IStockItemUpdate> = {
    data: dbData
  }

  return apiResponse
}
