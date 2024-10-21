import { core, IServiceResult } from '../../../../core/index.js'
import { IStockItemAdd, IStockItemSaveResult } from '../../interfaces/index.js'
import { v1StockRepository } from '../../repositories/index.js'
import { filterValidStockItems } from '../../utils/filter-valid-stock-items.js'

export async function uploadCSV(
  file: Express.Multer.File
): Promise<IServiceResult<IStockItemSaveResult>> {
  // Destructure the file object
  const { originalname, size, path } = file

  // parse the CSV file and get the data and errors
  const { data, errors } = core.helpers.csvParser(path)

  // Filter the valid stock items
  const validStockItems = filterValidStockItems(data as IStockItemAdd[])

  // Add the CSV file to the database
  const dbCsvFileId = await v1StockRepository.csv.addCsvFile({
    fileName: originalname,
    fileSize: size,
    totalItems: data.length,
    validItemsCount: validStockItems.length,
    invalidItemsCount: errors.length
  })

  // add the csvFileId to the valid stock items
  validStockItems.map((item: IStockItemAdd) => {
    item.csvFileId = dbCsvFileId
  })

  // Save the stock items to the database
  const dbData: IStockItemSaveResult =
    await v1StockRepository.stock.save.saveStockItems(validStockItems)

  const csvAnalyzedData: IStockItemSaveResult = {
    ...dbData,
    ignored: errors
  }

  // Create the service result
  const serviceResult: IServiceResult<IStockItemSaveResult> = {
    data: csvAnalyzedData
  }

  return serviceResult
}
