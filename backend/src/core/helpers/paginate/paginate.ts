import { IResponseJsonMeta, IServiceResult } from '../../interfaces/index.js'

interface IPaginateInput<T> {
  data: T[]
  totalCount: number
  currentPage: number
  perPage: number
}

export function paginate<T>({
  data,
  totalCount,
  currentPage,
  perPage
}: IPaginateInput<T>): IServiceResult<T> {
  const totalPages = Math.ceil(totalCount / perPage)

  // Ensure the current page is within the valid range
  const safePage = Math.max(1, Math.min(currentPage, totalPages))

  const meta: IResponseJsonMeta = {
    page: safePage,
    totalPages,
    count: data.length,
    perPage,
    totalCount
  }

  // Return the paginated result with metadata
  return {
    data,
    meta
  }
}
