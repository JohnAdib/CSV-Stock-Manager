import { IResponseJson } from '@/interfaces'
import Swal from 'sweetalert2'

interface IApiMessagesAlert {
  apiRes: IResponseJson
}

export function apiMessagesAlert({ apiRes }: IApiMessagesAlert): void {
  const errorMessageObj = apiRes?.messages?.filter((msg) => !msg.path)

  if (errorMessageObj?.length) {
    // get the first message
    const firstErrorMessage = errorMessageObj[0]
    // show alert with the first message
    Swal.fire({
      title: firstErrorMessage.title,
      text: firstErrorMessage.msg,
      icon: firstErrorMessage.type as 'error' | 'warning' | 'info' | 'success'
    })
  }
}
