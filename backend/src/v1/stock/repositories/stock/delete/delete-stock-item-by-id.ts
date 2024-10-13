import { core } from '../../../../../core/index.js'

interface IDeleteStockItemByIdParams {
  id: number
}

export const deleteStockItemById = async ({
  id
}: IDeleteStockItemByIdParams): Promise<void> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const deletedItem = await prisma.stock.delete({
      where: { id }
    })

    if (!deletedItem) {
      throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
    }
  } catch (error: unknown) {
    if (error instanceof core.error.client.NotFound) {
      throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
    }
    throw new core.error.client.Database(error)
  }
}
