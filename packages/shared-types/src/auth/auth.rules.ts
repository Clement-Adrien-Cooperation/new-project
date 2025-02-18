export const PASSWORD_RULES = {
  maxLength: 100,
  minLength: 6,
  requireNumber: true,
  requireSpecialChar: true
} as const

export const USERNAME_RULES = {
  allowedCharacters: /^[a-zA-Z0-9_]+$/,
  maxLength: 20,
  minLength: 3,
  noSpaces: true
} as const
