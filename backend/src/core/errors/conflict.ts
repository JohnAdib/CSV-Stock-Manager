import type { IResponseJsonMeta } from '../interfaces/index.js'

export class Conflict extends Error {
  public statusCode: number

  public meta: IResponseJsonMeta | undefined

  public result: any

  constructor(msg: string) {
    super(msg)
    this.statusCode = 409
    this.name = 'Conflict!'
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
}
