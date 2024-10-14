import { IStockItemAdd, IStockItemDb } from './index.js'

export interface IStockItemSaveResult {
  success: { item: IStockItemDb }[]
  failed: { item: IStockItemAdd; error: unknown }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ignored?: any
}
