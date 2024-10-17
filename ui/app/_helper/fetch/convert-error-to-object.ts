import { IResponseJsonMessage } from '@/interfaces'

interface IConvertErrorsToObject {
  messages: IResponseJsonMessage[] | undefined
}

export const convertErrorsToObject = ({
  messages
}: IConvertErrorsToObject): Record<string, string> | undefined => {
  const messagesWithPaths = messages?.filter((error) => error.path)

  return messagesWithPaths?.reduce(
    (acc: Record<string, string>, error: IResponseJsonMessage) => {
      const path = error.path as string
      acc[path] = error.msg
      return acc
    },
    {}
  )
}
