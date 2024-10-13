import type { IResponseJsonMessage } from './i-response-json-message.js'
import type { IResponseJsonMeta } from './i-response-json-meta.js'

export interface IServiceResult {
  okay: boolean
  messages?: Array<IResponseJsonMessage>
  result: any
  meta?: IResponseJsonMeta
}
