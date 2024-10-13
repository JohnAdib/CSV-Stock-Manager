export const mapStatusToDetailEmoji = (statusCode: number): string => {
  const statusEmojiMap: { [key: number]: string } = {
    // 1xx Informational
    // 2xx Success
    200: '👍',
    201: '🆕',
    204: '🗑️',
    // 3xx Redirection
    // 4xx Client Error
    400: '❌',
    401: '🔒',
    403: '🔐',
    404: '🧐',
    405: '🚷',
    409: '⚔️ ',
    412: '🧶',
    422: '🪤',
    429: '🕒',
    // 5xx Server Error
    500: '🔥',
    501: '🔧',
    502: '🚧',
    503: '⛔',
    504: '⌛'
  }

  return statusEmojiMap[statusCode] || 'ℹ️ '
}
