import { z } from 'zod'

import type { AuthUserDTO } from './dto'
import type { DefaultErrorKey, Result } from './result'

import { PASSWORD_RULES, type RegisterErrorKey, USERNAME_RULES } from './auth.validation'

const usernameSchema = z
  .string()
  .min(USERNAME_RULES.minLength, { message: 'username-too-short' as RegisterErrorKey })
  .max(USERNAME_RULES.maxLength, { message: 'username-too-long' as RegisterErrorKey })
  .regex(USERNAME_RULES.allowedCharacters, { message: 'username-invalid-characters' as RegisterErrorKey })
  .refine(value => !USERNAME_RULES.noSpaces || !value.includes(' '), {
    message: 'username-no-spaces' as RegisterErrorKey
  })

const passwordSchema = z
  .string()
  .min(PASSWORD_RULES.minLength, { message: 'password-too-weak' as RegisterErrorKey })
  .refine(value => PASSWORD_RULES.requireNumber ? /\d/.test(value) : true, {
    message: 'password-require-number' as RegisterErrorKey
  })
  .refine(value => PASSWORD_RULES.requireSpecialChar ? /[!@#$%^&*]/.test(value) : true, {
    message: 'password-require-special-char' as RegisterErrorKey
  })

export const RegisterRequestSchema = z.object({
  username: usernameSchema,
  email: z.string().email(),
  password: passwordSchema
})

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>

export const LoginCredentialsSchema = z.object({
  userNameOrEmail: z.string(),
  password: z.string()
})

export type LoginCredentials = z.infer<typeof LoginCredentialsSchema>

export type LoginErrorKey = DefaultErrorKey | 'invalid-credentials'

export type LoginResponseData = {
  token: string
  user: AuthUserDTO
}

export type LoginResponse = Result<LoginErrorKey, LoginResponseData>
