export const USERNAME_RULES = {
  minLength: 3,
  maxLength: 20,
  allowedCharacters: /^[a-zA-Z0-9_]+$/,
  noSpaces: true
} as const

export const PASSWORD_RULES = {
  minLength: 6,
  requireNumber: true,
  requireSpecialChar: true
} as const

export type RegisterErrorKey =
  | 'username-too-short'
  | 'username-too-long'
  | 'username-invalid-characters'
  | 'username-no-spaces'
  | 'password-too-weak'
  | 'password-require-number'
  | 'password-require-special-char'
  | 'unexpected-error'
