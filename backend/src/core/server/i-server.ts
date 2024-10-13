import type { Router } from 'express'

export interface IServer {
  port?: number | string
  apiEndpoints: Router
}
