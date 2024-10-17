import { IResponseJson } from '@/interfaces'
import Swal from 'sweetalert2'

interface IApiNotification {
  apiRes: IResponseJson
}

export function apiNotification({ apiRes }: IApiNotification): void {
  Swal.fire({
    title: apiRes.notification?.title,
    text: apiRes.notification?.text,
    icon: apiRes.notification?.type as 'error' | 'warning' | 'info' | 'success'
  })
}
