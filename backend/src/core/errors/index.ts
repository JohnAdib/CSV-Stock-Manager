import { Conflict } from './conflict.js'
import { Database } from './database.js'
import { NotFound } from './not-found.js'
import { PayloadTooLarge } from './payload-too-large.js'
import { TooManyRequests } from './too-many-requests.js'
import { UnprocessableEntity } from './unprocessable-entity.js'
import { UnsupportedMediaType } from './unsupported-media-type.js'

export const error = {
  client: {
    NotFound,
    Conflict,
    TooManyRequests,
    UnsupportedMediaType,
    UnprocessableEntity,
    PayloadTooLarge,
    Database
  }
}
