import { deleteById } from './delete-by-id/index.js'
import { getAll } from './get-all/index.js'
import { getById } from './get-by-id/index.js'
import { saveItem } from './save-item/index.js'
import { updateItem } from './update-item/index.js'
import { uploadCSV } from './upload-csv/index.js'

export const v1StockServices = {
  getAll,
  getById,
  deleteById,
  saveItem,
  updateItem,
  uploadCSV
}
