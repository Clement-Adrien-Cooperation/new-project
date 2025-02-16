import { type FC, useState } from 'react'

import type { LoginCredentials } from '@shared-types/auth'

import { useAuth, useI18n } from '@/application/hooks'
import { AuthService } from '@/application/services'
import { AUTH_FORM_FIELDS, type AuthFormFields } from '@/domain/auth'
import { Form, type FormProps, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'
import { mergeClassNames, type ValidationErrors } from '@/presentation/utils'

import './LoginForm.styles.sass'

type LoginFormValidationErrors = ValidationErrors<AuthFormFields>

export const LoginForm: FC<FormProps> = ({ className, ...loginFormProps }) => {
  const [loginFormValidationErrors, _setLoginFormValidationErrors] = useState<LoginFormValidationErrors>()

  const { setAuthenticatedUser } = useAuth()
  const { translate } = useI18n()

  const onLoginFormSubmit = async (formData: FormData) => {
    const username = formData.get(AUTH_FORM_FIELDS.username) as string
    const password = formData.get(AUTH_FORM_FIELDS.password) as string
    const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

    const credentials: LoginCredentials = { username, password }
    const loginResult = await AuthService.login(credentials, shouldRemember)
    console.log(loginResult)

    if (loginResult.status === 'error') {
      //! display error messages
      return
    }

    setAuthenticatedUser(loginResult.data)
  }

  return (
    <Form
      className={mergeClassNames('login-form', className)}
      onSubmit={onLoginFormSubmit}
      validationErrors={loginFormValidationErrors}
      {...loginFormProps}
    >
      <UserNameField />

      <UserPasswordField />

      <RememberMeCheckbox />

      <RequiredFieldsMessage />

      <SubmitButton>
        {translate('components.forms.loginForm.submit')}
      </SubmitButton>
    </Form>
  )
}
