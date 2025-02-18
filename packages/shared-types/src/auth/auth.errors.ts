import type { EmailErrorKey, PasswordErrorKey, UsernameErrorKey } from '../dto'

import type { PASSWORD_RULES, USERNAME_RULES } from './auth.rules'

type PasswordRule = keyof typeof PASSWORD_RULES
type UsernameRule = keyof typeof USERNAME_RULES

export const EMAIL_ERRORS: Record<string, EmailErrorKey> = {
  invalidEmail: 'email-invalid'
}

export const PASSWORD_ERRORS: Record<PasswordRule, PasswordErrorKey> = {
  maxLength: 'password-too-long',
  minLength: 'password-too-short',
  requireNumber: 'password-require-number',
  requireSpecialChar: 'password-require-special-char'
}

export const USERNAME_ERRORS: Record<UsernameRule, UsernameErrorKey> = {
  allowedCharacters: 'username-invalid-characters',
  maxLength: 'username-too-long',
  minLength: 'username-too-short',
  noSpaces: 'username-no-spaces'
}
