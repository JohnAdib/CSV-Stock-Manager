import type { IResponseJsonMeta } from './i-response-json-meta.js'
import type { IResponseJsonNotification } from './i-response-json-notification.js'

export interface IResponseJson {
  okay: boolean
  statusCode?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
  meta?: IResponseJsonMeta
  notification?: IResponseJsonNotification
  validation?: Record<string, string>
}
