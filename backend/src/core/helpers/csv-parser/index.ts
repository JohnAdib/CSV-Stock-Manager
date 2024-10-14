import fs from 'fs'
import Papa, { ParseResult } from 'papaparse'

export const csvParser = (filePath: string): ParseResult<unknown> => {
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const result = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true
  })

  return result
}
