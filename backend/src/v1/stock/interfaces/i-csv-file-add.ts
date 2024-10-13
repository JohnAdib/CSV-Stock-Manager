export interface ICsvFileAdd {
  fileName: string
  fileSize: number
  totalRecords: number
  successCount: number
  invalidCount: number
  upsertFailedCount: number
  status: string
}
