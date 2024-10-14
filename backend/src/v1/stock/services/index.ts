import { deleteStockItemById } from './delete-stock-item-by-id.js'
import { getAll } from './get-all.js'
import { getStockItemById } from './get-stock-item-by-id.js'
import { saveStockItem } from './save-stock-item.js'
import { updateStockItem } from './update-stock-item.js'
import { uploadCSV } from './upload-csv.js'

export const v1StockServices = {
  getAll,
  getStockItemById,
  deleteStockItemById,
  saveStockItem,
  updateStockItem,
  uploadCSV
}
