import type { IResponseJsonMeta } from './i-response-json-meta.js'

export interface IServiceResult<T> {
  data: T[]
  meta?: IResponseJsonMeta
}
