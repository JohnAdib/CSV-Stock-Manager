import type { IResponseJsonMeta } from '../interfaces/index.js'

export class UnsupportedMediaType extends Error {
  public statusCode: number

  public meta: IResponseJsonMeta | undefined

  public result: unknown

  constructor(msg: string) {
    super(msg)
    this.statusCode = 415
    this.name = 'Unsupported Media Type!'
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
