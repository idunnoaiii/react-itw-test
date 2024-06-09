import { ErrorInfo } from 'react'

function logError(errr: Error, info: ErrorInfo) {
  console.log(errr, info)
}

export default logError
