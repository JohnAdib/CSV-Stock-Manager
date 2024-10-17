import { IResponseJson } from '@/interfaces'
import Swal from 'sweetalert2'

interface IApiNotification {
  apiResponse: IResponseJson | null
}

export function apiNotification({ apiResponse }: IApiNotification): void {
  const notif = apiResponse?.notification
  if (!notif) {
    return
  }
  Swal.fire({
    title: notif?.title,
    text: notif?.text,
    icon: notif?.type as 'error' | 'warning' | 'info' | 'success'
  })
}
