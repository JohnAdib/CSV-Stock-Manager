import { IStockItemAdd } from '../interfaces/i-stock-item-add.js'
import { IStockItemDb } from '../interfaces/i-stock-item-db.js'
import { saveStockItem } from './save-stock-item.js'

interface IUpsertResult {
  success: { item: IStockItemDb }[]
  failed: { item: IStockItemAdd; error: unknown }[]
}

export const saveStockItems = async (
  items: IStockItemAdd[]
): Promise<IUpsertResult> => {
  const success: { item: IStockItemDb }[] = []
  const failed: { item: IStockItemAdd; error: unknown }[] = []

  await Promise.all(
    items.map(async (item) => {
      try {
        const result: IStockItemDb = await saveStockItem(item)
        success.push({ item: result })
      } catch (error) {
        failed.push({ item, error })
      }
    })
  )

  return { success, failed }
}
