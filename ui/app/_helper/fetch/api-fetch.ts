import { IResponseJson } from '@/interfaces'
import { fetchErrorMsg } from './fetch-error-msg'

type ApiMethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH'

interface IApiFetch {
  url: string
  method?: ApiMethodType
  body?: unknown
  stringify?: boolean
  query?: Record<string, string | number>
}

export async function apiFetch({
  url,
  method,
  body,
  query,
  stringify = true
}: IApiFetch): Promise<IResponseJson> {
  const reqBody: string = stringify ? JSON.stringify(body) : (body as string)

  const fetchOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: reqBody
  }

  // add query string to url if method is GET and query is provided
  if (method === 'GET' && query) {
    const queryConvertedToStrings = Object.entries(query).reduce(
      (acc, [key, value]) => {
        acc[key] = value.toString()
        return acc
      },
      {} as Record<string, string>
    )
    const queryStr = new URLSearchParams(queryConvertedToStrings).toString()
    url = `${url}?${queryStr}`
  }

  try {
    const apiResponseJson: IResponseJson = await fetch(url, fetchOptions).then(
      (res) => res.json()
    )

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
