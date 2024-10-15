import { core } from '../../../../../core/index.js'

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
  let updatedItem = null

  const filteredData = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(updateData).filter(([_, value]) => value !== undefined)
  )

  try {
    updatedItem = await prisma.stock.update({
      where: { id },
      data: filteredData
    })
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }

  if (!updatedItem) {
    throw new core.error.client.NotFound(`Stock item with id ${id} not found`)
  }
}
