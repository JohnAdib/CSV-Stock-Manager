type ResponseNotificationTypes =
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'path'

export interface IResponseJsonNotification {
  text: string
  title?: string
  type?: ResponseNotificationTypes
}
