import type { LoginErrorKey } from '@shared-types/dto'

import type { AuthFormField } from '@/domain/auth'
import type { Translate } from '@/domain/i18n'
import type { ValidationErrors } from '@/presentation/utils'

export type LoginFormValidationErrors = ValidationErrors<AuthFormField>

export const getLoginFormValidationErrors = (errors: LoginErrorKey, translate: Translate): LoginFormValidationErrors => {
  const formErrors: string[] = []
  const usernameOrEmailErrors: string[] = []
  const passwordErrors: string[] = []

  switch (errors) {
    case 'bad-request':
      formErrors.push(translate('errors.badRequest'))
      break
    case 'invalid-credentials':
      usernameOrEmailErrors.push(translate('components.forms.loginForm.errors.invalidCredentials'))
      passwordErrors.push(translate('components.forms.loginForm.errors.invalidCredentials'))
      passwordErrors.push(translate('components.forms.loginForm.errors.invalidCredentials'))
      break
    case 'unexpected-error':
    default:
      formErrors.push(translate('errors.unexpected'))
      break
  }

  return {
    form: formErrors,
    usernameOrEmail: usernameOrEmailErrors,
    password: passwordErrors
  }
}
