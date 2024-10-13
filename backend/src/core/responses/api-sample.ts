import { type IResponseJson } from '../interfaces/index.js'

export const responseApiSample: IResponseJson = {
  okay: true,
  result: null,
  messages: [
    {
      title: 'Sample API Response!',
      msg: 'Just to show you how an API response looks like!'
    }
  ]
}
