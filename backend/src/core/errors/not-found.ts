import type { IResponseJsonMeta } from '../interfaces/index.js'

export class NotFound extends Error {
  public statusCode: number

  public meta: IResponseJsonMeta | undefined

  public result: unknown

  constructor(msg: string) {
    super(msg)
    this.statusCode = 404
    this.name = 'Not Found!'
    this.result = undefined
    this.meta = undefined
  }

  /**
   * @description Overwrite the custom title for the error
   */
  setTitle(_title: string) {
    this.name = _title
    return this
  }

  /**
   * @description Set the custom result for the error
   */
  setResult(_result: unknown) {
    this.result = _result
    return this
  }

  /**
   * @description Set the custom meta for the error like pagination
   */
  setMeta(_meta: IResponseJsonMeta) {
    this.meta = _meta
    return this
  }
}
