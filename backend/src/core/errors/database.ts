import type { IResponseJsonMeta } from '../interfaces/index.js'

export class Database extends Error {
  public statusCode: number

  public result: any

  public meta: IResponseJsonMeta | undefined

  public errPath: string = 'database'

  constructor(msg: any) {
    super(msg.message)
    this.name = msg.name
    this.result = undefined
    this.meta = undefined

    // extract error properties from the error object
    const errorProperties = msg?.errors?.title
    this.errPath = errorProperties.path
    switch (errorProperties.kind) {
      case 'required':
        this.statusCode = 422
        break

      default:
        this.statusCode = 417
        break
    }
  }
}
