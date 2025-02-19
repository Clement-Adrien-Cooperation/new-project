export const PASSWORD_RULES = {
  maxLength: 100,
  minLength: 6,
  requireNumber: true,
  requireSpecialChar: true
} as const

export const USERNAME_CHARACTERS_REGEX = /^[a-zA-Z0-9_]+$/

export const USERNAME_RULES = {
  allowedCharacters: USERNAME_CHARACTERS_REGEX,
  maxLength: 20,
  minLength: 3,
  noSpaces: true
} as const
