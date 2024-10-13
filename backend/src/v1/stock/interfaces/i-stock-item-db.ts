import { IStockItemAdd } from './i-stock-item-add.js'

export interface IStockItemDb extends IStockItemAdd {
  id: number
  createdAt: Date
  updatedAt: Date
}
