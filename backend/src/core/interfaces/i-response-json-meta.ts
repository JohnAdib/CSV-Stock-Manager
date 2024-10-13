export interface IResponseJsonMeta {
  /**
   * @description Current page within paginated list of results
   */
  page?: number

  /**
   * @description Total number of pages of results
   */
  totalPages?: number

  /**
   * @description Number of results returned for the current page
   */
  count?: number

  /**
   * @description Number of results per page of results
   */
  perPage?: number

  /**
   * @description Total number of results available without any search parameters
   */
  totalCount?: number
}
