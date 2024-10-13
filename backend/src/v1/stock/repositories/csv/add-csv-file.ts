import { core } from 'src/core/index.js'
import { ICsvFileAdd } from '../../interfaces/index.js'

export const addCsvFile = async ({
  fileName,
  fileSize,
  totalRecords,
  successCount,
  invalidCount,
  upsertFailedCount,
  status
}: ICsvFileAdd): Promise<number> => {
  const prisma = core.database.prisma.getPrismaInstance()

  try {
    const csvFileLog = await prisma.csvFileLog.create({
      data: {
        fileName,
        fileSize,
        totalRecords,
        successCount,
        invalidCount,
        upsertFailedCount,
        status
      }
    })

    return csvFileLog.id
  } catch (error: unknown) {
    throw new core.error.client.Database(error)
  }
}
