import { type IResponseJson } from '../interfaces/index.js'

export const responseApiSample: IResponseJson = {
  okay: true,
  result: null,
  notification: {
    text: 'Just to show you how an API response looks like!',
    title: 'Sample API Response!'
  }
}
