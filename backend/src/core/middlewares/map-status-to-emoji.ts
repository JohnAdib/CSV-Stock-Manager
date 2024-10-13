export const mapStatusToEmoji = (statusCode: number): string => {
  const statusRange = Math.floor(statusCode / 100)

  switch (statusRange) {
    case 1:
      // Informational responses (1xx)
      return '🟣'

    case 2:
      // Successful responses (2xx)
      return '✅'

    case 3:
      // Redirection messages (3xx)
      return '🔀'

    case 4:
      // Client errors (4xx)
      return '🟡'

    case 5:
      // Server errors (5xx)
      return '🆘'

    default:
      // Fallback for unexpected status codes
      return '💯'
  }
}
