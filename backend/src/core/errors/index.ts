import { Conflict } from './conflict.js'
import { Database } from './database.js'
import { NotFound } from './not-found.js'
import { TooManyRequests } from './too-many-requests.js'
import { ValidationGroupMessages } from './validation-group-messages.js'

export const error = {
  client: {
    ValidationGroupMessages,
    NotFound,
    Conflict,
    TooManyRequests,
    Database
  }
}
