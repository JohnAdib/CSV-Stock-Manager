import type { IResponseJsonMessage } from '../interfaces/i-response-json-message.js'

export class ValidationGroupMessages extends Error {
  public statusCode: number

  public messages: IResponseJsonMessage[]

  constructor(messages: IResponseJsonMessage[]) {
    super('Validation Error')
    this.statusCode = 422
    this.messages = messages
  }
}
