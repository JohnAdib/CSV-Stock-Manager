import { core } from '../../../../core/index.js'
import { ICsvFileAdd } from '../../interfaces/index.js'

export const addCsvFile = async ({
  fileName,
  fileSize,
  totalItems,
  validItemsCount,
  invalidItemsCount
}: ICsvFileAdd): Promise<number> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const csvFileLog = await prisma.csvFileLog.create({
      data: {
        fileName,
        fileSize,
        totalItems,
        validItemsCount,
        invalidItemsCount
      }
    })

    return csvFileLog.id
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
