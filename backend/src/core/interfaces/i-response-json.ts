import type { IResponseJsonMessage } from './i-response-json-message.js'
import type { IResponseJsonMeta } from './i-response-json-meta.js'

export interface IResponseJson {
  okay: boolean
  messages?: Array<IResponseJsonMessage>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
  meta?: IResponseJsonMeta
  statusCode?: number
}
