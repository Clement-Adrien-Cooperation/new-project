import type { DefaultErrorKey, EmailErrorKey, PasswordErrorKey, RegisterErrorKey, RegisterRequest, UsernameErrorKey } from '../dto'
import { failure, type Result, success } from '../result'

import { EMAIL_ERRORS, PASSWORD_ERRORS, USERNAME_ERRORS } from './auth.errors'
import { emailSchema, passwordSchema, RegisterRequestSchema, usernameSchema } from './auth.schema'

// PASSWORD VALIDATION

const isPasswordError = (error: string): error is PasswordErrorKey => Object.values(PASSWORD_ERRORS).includes(error as PasswordErrorKey)

export const validatePassword = (password: unknown): Result<Array<PasswordErrorKey | DefaultErrorKey>> => {
  const passwordValidationResult = passwordSchema.safeParse(password)

  if (passwordValidationResult.success) {
    return success()
  }

  const errors: Array<PasswordErrorKey | DefaultErrorKey> = passwordValidationResult.error.issues.map(issue => {
    const message = issue.message

    return isPasswordError(message)
      ? message
      : 'unexpected-error'
  })

  const validErrors = errors.filter((error): error is PasswordErrorKey => error !== null)
  const uniqueErrors = Array.from(new Set(validErrors))
  return failure(uniqueErrors)
}

// USERNAME VALIDATION

const isUsernameError = (error: string): error is UsernameErrorKey => Object.values(USERNAME_ERRORS).includes(error as UsernameErrorKey)

export const validateUsername = (username: unknown): Result<Array<UsernameErrorKey | DefaultErrorKey>> => {
  const usernameValidationResult = usernameSchema.safeParse(username)

  if (usernameValidationResult.success) {
    return success()
  }

  const errors: Array<UsernameErrorKey | DefaultErrorKey> = usernameValidationResult.error.issues.map(issue => {
    const message = issue.message

    return isUsernameError(message)
      ? message
      : 'unexpected-error'
  })

  const validErrors = errors.filter((error): error is UsernameErrorKey => error !== null)
  const uniqueErrors = Array.from(new Set(validErrors))
  return failure(uniqueErrors)
}

// EMAIL VALIDATION

const isEmailError = (error: string): error is EmailErrorKey => Object.values(EMAIL_ERRORS).includes(error as EmailErrorKey)

export const validateEmail = (email: unknown): Result<Array<EmailErrorKey | DefaultErrorKey>> => {
  const emailValidationResult = emailSchema.safeParse(email)

  if (emailValidationResult.success) {
    return success()
  }

  const errors: Array<EmailErrorKey | DefaultErrorKey> = emailValidationResult.error.issues.map(issue => {
    const message = issue.message

    return isEmailError(message)
      ? message
      : 'unexpected-error'
  })

  const validErrors = errors.filter((error): error is EmailErrorKey => error !== null)
  const uniqueErrors = Array.from(new Set(validErrors))
  return failure(uniqueErrors)
}

// REGISTER VALIDATION

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
  const registerRequestValidationResult = RegisterRequestSchema.safeParse(registerRequest)

  if (registerRequestValidationResult.success) {
    return success(registerRequestValidationResult.data)
  }

  const errors: RegisterErrorKey[] = registerRequestValidationResult.error.issues.map(issue => {
    const field = String(issue.path[0])
    const message = issue.message

    return isRegisterErrorByField(field, message)
      ? message
      : 'bad-request'
  })

  const uniqueErrors = Array.from(new Set(errors))
  return failure(uniqueErrors)
}
