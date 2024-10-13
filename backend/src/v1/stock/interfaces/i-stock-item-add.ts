export interface IStockItemAdd {
  sku: string
  quantity: number
  store: string
  description: string | null
  csvFileId: number | null
}
