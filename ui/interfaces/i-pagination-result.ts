export interface IPaginationMeta {
  currentPage: number
  perPage: number
  totalItems: number
  totalPages: number
}

export interface IPaginationResult<T> {
  result: T[]
  meta: IPaginationMeta
}
