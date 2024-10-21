import { core, IServiceResult } from '../../../../core/index.js'
import { IStockItemUpdate } from '../../interfaces/index.js'
import { v1StockRepository } from '../../repositories/index.js'

interface IServiceUpdateItem {
  item: IStockItemUpdate
}

export async function updateItem({
  item
}: IServiceUpdateItem): Promise<IServiceResult<IStockItemUpdate>> {
  // check the new sku is unique
  const existingItem = await v1StockRepository.stock.getStockItemBySku({
    sku: item.sku
  })
  // if user try to change to new sku that already exists
  if (existingItem && existingItem.id !== item.id) {
    throw new core.error.client.Conflict(
      `Stock item with sku ${item.sku} already exists`
    )
  }

  const dbData: IStockItemUpdate =
    await v1StockRepository.stock.updateStockItem(item)

  const apiResponse: IServiceResult<IStockItemUpdate> = {
    data: dbData
  }

  return apiResponse
}
