import { LogInIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import type { LoginCredentials, LoginErrorKey } from '@shared-types/auth'
import type { ErrorResult } from '@shared-types/result'

import { useAuth, useI18n } from '@/application/hooks'
import { AuthService } from '@/application/services'
import { AUTH_FORM_FIELDS, type AuthFormField } from '@/domain/auth'
import type { Translate } from '@/domain/i18n'
import { FieldSet, Form, FormErrors, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'
import type { ValidationErrors } from '@/presentation/utils'

type LoginFormValidationErrors = ValidationErrors<AuthFormField>
type LoginErrors = ErrorResult<LoginErrorKey>['errors']

const getLoginFormValidationErrors = (errors: LoginErrors, translate: Translate): LoginFormValidationErrors => {
  const formErrors: string[] = []
  const usernameOrEmailErrors: string[] = []
  const passwordErrors: string[] = []

  switch (errors) {
    case 'invalid-credentials':
      usernameOrEmailErrors.push(translate('components.forms.loginForm.errors.invalidCredentials'))
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

export const LoginForm: FC = () => {
  const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false)
  const [loginFormValidationErrors, setLoginFormValidationErrors] = useState<LoginFormValidationErrors>()

  const { setAuthenticatedUser } = useAuth()
  const { translate } = useI18n()

  const onLoginFormSubmit = async (formData: FormData) => {
    setIsLoginFormSubmitting(true)
    setLoginFormValidationErrors(undefined)

    const userNameOrEmail = formData.get(AUTH_FORM_FIELDS.usernameOrEmail) as string
    const password = formData.get(AUTH_FORM_FIELDS.password) as string
    const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

    const credentials: LoginCredentials = { userNameOrEmail, password }
    const loginResult = await AuthService.login(credentials, shouldRemember)

    if (loginResult.status === 'error') {
      const newValidationErrors = getLoginFormValidationErrors(loginResult.errors, translate)
      setLoginFormValidationErrors(newValidationErrors)
      setIsLoginFormSubmitting(false)
      return
    }

    setIsLoginFormSubmitting(false)
    setAuthenticatedUser(loginResult.data)
  }

  return (
    <Form
      onSubmit={onLoginFormSubmit}
      validationErrors={loginFormValidationErrors}
    >
      <FieldSet isDisabled={isLoginFormSubmitting}>
        <UserNameField
          label={translate('components.forms.loginForm.userNameOrEmail.label')}
          name={AUTH_FORM_FIELDS.usernameOrEmail}
          placeholder={translate('components.forms.loginForm.userNameOrEmail.placeholder')}
        />

        <UserPasswordField />

        <FormErrors errors={loginFormValidationErrors} />

        <RememberMeCheckbox />

        <RequiredFieldsMessage />
      </FieldSet>

      <SubmitButton
        Icon={<LogInIcon />}
        isPending={isLoginFormSubmitting}
      >
        {translate('components.forms.loginForm.submit')}
      </SubmitButton>
    </Form>
  )
}
