import { IResponseJson } from '@/interfaces'
import { fetchErrorMsg } from './fetch-error-msg'

type ApiMethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

interface IApiFetch {
  url: string
  method?: ApiMethodType
  body: unknown
  stringify?: boolean
}

export async function apiFetch({
  url,
  method,
  body,
  stringify = true
}: IApiFetch): Promise<IResponseJson> {
  const reqBody: string = stringify ? JSON.stringify(body) : (body as string)

  try {
    const apiResponseJson: IResponseJson = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: reqBody
    }).then((res) => res.json())

    return apiResponseJson
  } catch (error: unknown) {
    fetchErrorMsg(error)
    const errorResponse: IResponseJson = {
      okay: false,
      result: null
    }
    return errorResponse
  }
}
