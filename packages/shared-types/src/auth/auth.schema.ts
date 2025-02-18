import { z } from 'zod'

import type { LoginRequest, RegisterRequest } from '../dto'

import { EMAIL_ERRORS, PASSWORD_ERRORS, USERNAME_ERRORS } from './auth.errors'
import { PASSWORD_RULES, USERNAME_RULES } from './auth.rules'

const passwordSchema = z
  .string()
  .min(PASSWORD_RULES.minLength, { message: PASSWORD_ERRORS.minLength })
  .refine(value => PASSWORD_RULES.requireNumber ? /\d/.test(value) : true, { message: PASSWORD_ERRORS.requireNumber })
  .refine(value => PASSWORD_RULES.requireSpecialChar ? /[!@#$%^&*]/.test(value) : true, { message: PASSWORD_ERRORS.requireSpecialChar })

const usernameSchema = z
  .string()
  .min(USERNAME_RULES.minLength, { message: USERNAME_ERRORS.minLength })
  .max(USERNAME_RULES.maxLength, { message: USERNAME_ERRORS.maxLength })
  .regex(USERNAME_RULES.allowedCharacters, { message: USERNAME_ERRORS.allowedCharacters })
  .refine(value => !USERNAME_RULES.noSpaces || !value.includes(' '), { message: USERNAME_ERRORS.noSpaces })

export const RegisterRequestSchema: z.ZodType<RegisterRequest> = z.object({
  username: usernameSchema,
  email: z.string().email({ message: EMAIL_ERRORS.invalidEmail }),
  password: passwordSchema
})

export const LoginRequestSchema: z.ZodType<LoginRequest> = z.object({
  userNameOrEmail: z.string(),
  password: z.string()
})
