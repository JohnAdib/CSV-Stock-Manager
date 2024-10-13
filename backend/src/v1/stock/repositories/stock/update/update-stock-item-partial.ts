import { core } from 'src/core/index.js'

interface IUpdateStockItemPartialParams {
  id: number
  sku?: string
  quantity?: number
  store?: string
  description?: string | null
}

export const updateStockItemPartial = async ({
  id,
  ...updateData
}: IUpdateStockItemPartialParams): Promise<void> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const filteredData = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(updateData).filter(([_, value]) => value !== undefined)
    )

    const updatedItem = await prisma.stock.update({
      where: { id },
      data: filteredData
    })

    if (!updatedItem) {
      throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
    }
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
