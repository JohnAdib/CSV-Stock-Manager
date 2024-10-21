import { deleteById } from './delete-by-id/index.js'
import { getAll } from './get-all/index.js'
import { getById } from './get-by-id/index.js'
import { insertItem } from './insert-item/index.js'
import { updateItem } from './update-item/index.js'
import { uploadCsv } from './upload-csv/index.js'

export const v1Stock = {
  getAll,
  uploadCsv,
  getById,
  insertItem,
  updateItem,
  deleteById
}
