import type { AuthServiceRegisterErrorKey } from '@/application/services'
import type { AuthFormField } from '@/domain/auth'
import type { Translate } from '@/domain/i18n'
import type { ValidationErrors } from '@/presentation/utils'
import { PASSWORD_RULES, USERNAME_RULES } from '@shared-types/auth'

export type RegisterFormValidationErrors = ValidationErrors<AuthFormField>

export const getRegisterFormValidationErrors = (errors: AuthServiceRegisterErrorKey[], translate: Translate): RegisterFormValidationErrors => {
  const formErrors: string[] = []
  const usernameErrors: string[] = []
  const emailErrors: string[] = []
  const passwordErrors: string[] = []
  const confirmPasswordErrors: string[] = []

  for (const error of errors) {
    switch (error) {
      case 'bad-request':
        formErrors.push(translate('errors.badRequest'))
        break
      case 'email-already-exists':
        emailErrors.push(translate('components.forms.registerForm.errors.emailAlreadyExists'))
        break
      case 'email-invalid':
        emailErrors.push(translate('components.forms.fields.email.errors.invalid'))
        break
      case 'passwords-don\'t-match':
        confirmPasswordErrors.push(translate('components.forms.fields.passwordsValidation.errors.passwordsDonTMatch'))
        break
      case 'password-require-number':
        passwordErrors.push(translate('components.forms.fields.userPassword.errors.requireNumber'))
        break
      case 'password-require-special-char':
        passwordErrors.push(translate('components.forms.fields.userPassword.errors.requireSpecialCharacter'))
        break
      case 'password-too-long':
        passwordErrors.push(translate('components.forms.fields.userPassword.errors.tooLong', { smart_count: PASSWORD_RULES.maxLength }))
        break
      case 'password-too-short':
        passwordErrors.push(translate('components.forms.fields.userPassword.errors.tooShort', { smart_count: PASSWORD_RULES.minLength }))
        break
      case 'username-already-exists':
        usernameErrors.push(translate('components.forms.registerForm.errors.usernameAlreadyExists'))
        break
      case 'username-invalid-characters':
        usernameErrors.push(translate('components.forms.fields.validUserName.errors.invalidCharacters'))
        break
      case 'username-no-spaces':
        usernameErrors.push(translate('components.forms.fields.validUserName.errors.noSpaces'))
        break
      case 'username-too-long':
        usernameErrors.push(translate('components.forms.fields.validUserName.errors.tooLong', { smart_count: USERNAME_RULES.maxLength }))
        break
      case 'username-too-short':
        usernameErrors.push(translate('components.forms.fields.validUserName.errors.tooShort', { smart_count: USERNAME_RULES.minLength }))
        break
      case 'unexpected-error':
      default:
        formErrors.push(translate('errors.unexpected'))
        break
    }
  }

  return {
    form: formErrors,
    username: usernameErrors,
    email: emailErrors,
    password: passwordErrors,
    confirmPassword: confirmPasswordErrors
  }
}
