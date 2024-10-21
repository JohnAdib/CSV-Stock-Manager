import { addCsvFile } from './csv/add-csv-file.js'
import { deleteStockItemById } from './stock/delete/delete-stock-item-by-id.js'
import { deleteAllStockItems } from './stock/delete/delete-stock-items.js'
import { getStockItemById } from './stock/read/get-stock-item-by-id.js'
import { getStockItemBySku } from './stock/read/get-stock-item-by-sku.js'
import { getStockItemsCounts } from './stock/read/get-stock-items-count.js'
import { getStockItems } from './stock/read/get-stock-items.js'
import { saveStockItem } from './stock/save/save-stock-item.js'
import { saveStockItems } from './stock/save/save-stock-items.js'
import { updateStockItemPartial } from './stock/update/update-stock-item-partial.js'
import { updateStockItem } from './stock/update/update-stock-item.js'

export const v1StockRepository = {
  csv: { addCsvFile },
  stock: {
    deleteStockItemById,
    deleteAllStockItems,
    getStockItemById,
    getStockItemBySku,
    getStockItems,
    getStockItemsCounts,
    saveStockItem,
    saveStockItems,
    updateStockItemPartial,
    updateStockItem
  }
}
