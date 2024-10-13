import type { IResponseJson } from './i-response-json.js'

export interface IError extends Error, IResponseJson {}
