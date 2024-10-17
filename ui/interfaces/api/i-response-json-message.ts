type ResponseMessageTypes = 'error' | 'warn' | 'info' | 'success' | 'path'

export interface IResponseJsonMessage {
  msg: string
  type?: ResponseMessageTypes
  title?: string
  path?: string
}
