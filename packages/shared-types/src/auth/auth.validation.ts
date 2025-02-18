import type { RegisterErrorKey, RegisterRequest } from '../dto'
import { failure, type Result, success } from '../result'

import { EMAIL_ERRORS, PASSWORD_ERRORS, USERNAME_ERRORS } from './auth.errors'
import { RegisterRequestSchema } from './auth.schema'

type RegisterRequestKey = keyof RegisterRequest

const registerErrorsMap: Record<RegisterRequestKey, string[]> = {
  email: Object.values(EMAIL_ERRORS),
  password: Object.values(PASSWORD_ERRORS),
  username: Object.values(USERNAME_ERRORS)
}

const isRegisterRequestKey = (key: string): key is RegisterRequestKey => {
  return Object.keys(registerErrorsMap).includes(key)
}

const isRegisterErrorByField = (field: string, error: string): error is RegisterErrorKey => {
  if (!isRegisterRequestKey(field)) {
    return false
  }

  return registerErrorsMap[field].includes(error)
}

export const validateRegisterRequest = (registerRequest: unknown): Result<RegisterErrorKey[], RegisterRequest> => {
  const validationResult = RegisterRequestSchema.safeParse(registerRequest)

  if (validationResult.success) {
    return success(validationResult.data)
  }

  const errors: RegisterErrorKey[] = validationResult.error.issues.map(issue => {
    const field = String(issue.path[0])
    const message = issue.message

    return isRegisterErrorByField(field, message)
      ? message
      : 'bad-request'
  })

  const uniqueErrors = Array.from(new Set(errors))
  return failure(uniqueErrors)
}
