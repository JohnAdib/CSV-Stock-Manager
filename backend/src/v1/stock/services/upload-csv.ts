import { csvParser } from '../../../core/helpers/csv-parser/index.js'
import { IServiceResult } from '../../../core/index.js'
import { IStockItemAdd } from '../interfaces/i-stock-item-add.js'
import { IStockItemDb } from '../interfaces/i-stock-item-db.js'
import { v1StockRepository } from '../repositories/index.js'

export async function uploadCSV(
  file: Express.Multer.File
): Promise<IServiceResult<IStockItemDb>> {
  const { originalname, size, path } = file

  console.log('file', path, originalname, size)

  const { data, errors } = csvParser(path)

  console.log('data', data)
  console.log('errors', errors)

  const dbData = await v1StockRepository.stock.save.saveStockItems(
    data as IStockItemAdd[]
  )

  console.log('dbData', dbData)

  await v1StockRepository.csv.addCsvFile({
    fileName: originalname,
    fileSize: size,
    totalRecords: data.length,
    successCount: data.length,
    invalidCount: 0,
    upsertFailedCount: 0,
    status: 'success'
  })

  const apiResponse: IServiceResult<IStockItemDb> = {
    data: null
  }

  return apiResponse
}
