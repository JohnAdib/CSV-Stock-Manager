import { core } from '../../../../../core/index.js'

interface IDeleteStockItemByIdParams {
  id: number
}

export const deleteStockItemById = async ({
  id
}: IDeleteStockItemByIdParams): Promise<void> => {
  const prisma = core.database.prisma.getPrismaInstance()
  let deletedItem = null

  try {
    deletedItem = await prisma.stock.delete({
      where: { id }
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  if (!deletedItem) {
    throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
  }
}
