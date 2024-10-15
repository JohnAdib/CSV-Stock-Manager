import { deleteByIdController } from './delete-by-id/index.js'
import { getAllController } from './get-all/index.js'
import { getByIdController } from './get-by-id/index.js'
import { insertItemController } from './insert-item/index.js'
import { updateItemController } from './update-item/index.js'
import { uploadCsvController } from './upload-csv/index.js'

export const v1StockController = {
  getAll: getAllController,
  uploadCsv: uploadCsvController,
  getById: getByIdController,
  insertItem: insertItemController,
  updateItem: updateItemController,
  deleteById: deleteByIdController
}
