import { PrismaClient } from '@prisma/client'
import { IStockItem } from '../interfaces/i-stock-item'

const prisma = new PrismaClient()

interface SaveStockItemParams {
  item: IStockItem
}

export const saveStockItem = async ({
  item
}: SaveStockItemParams): Promise<void> => {
  try {
    await prisma.stock.create({
      data: {
        sku: item.sku,
        quantity: item.quantity,
        store: item.store,
        description: item.description || null
      }
    })
  } catch (error) {
    // const logMsg = `Error saving stock item with SKU ${item.sku}`
    // console.error(logMsg, error)
    // throw new Error(logMsg)
    // throw new error.client.Database(err)
  }
}
