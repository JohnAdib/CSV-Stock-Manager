import { IStockItemAdd } from '../interfaces/index.js'

const isString = (value: unknown): value is string => typeof value === 'string'
const isNumber = (value: unknown): value is number => typeof value === 'number'
const isNullableString = (value: unknown): value is string | null =>
  isString(value) || value === null

const isValidStockItem = (item: IStockItemAdd): item is IStockItemAdd => {
  return (
    isString(item.sku) &&
    isNumber(item.quantity) &&
    isString(item.store) &&
    isNullableString(item.description)
  )
}

export const filterValidStockItems = (
  records: IStockItemAdd[]
): IStockItemAdd[] => records.filter(isValidStockItem)
