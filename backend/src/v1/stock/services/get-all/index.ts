import { v1StockRepository } from '../../repositories/index.js'

interface IServiceGetAll {
  skip: number
  take: number
}

export async function getAll({ skip, take }: IServiceGetAll) {
  const stockItems = await v1StockRepository.stock.read.getStockItems({
    skip,
    take
  })
  return stockItems
}
