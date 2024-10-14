import { getAllController } from './get-all/index.js'
import { uploadCsvController } from './upload-csv/index.js'

export const v1StockController = {
  getAll: getAllController,
  uploadCsv: uploadCsvController
}
