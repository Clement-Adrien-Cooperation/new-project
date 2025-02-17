import { LogInIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import type { LoginCredentials } from '@shared-types/auth'

import { useAuth, useI18n } from '@/application/hooks'
import { AuthService } from '@/application/services'
import { AUTH_FORM_FIELDS, type AuthFormFields } from '@/domain/auth'
import { FieldSet, Form, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'
import type { ValidationErrors } from '@/presentation/utils'

type LoginFormValidationErrors = ValidationErrors<AuthFormFields>

export const LoginForm: FC = () => {
  const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false)
  const [loginFormValidationErrors, _setLoginFormValidationErrors] = useState<LoginFormValidationErrors>()

  const { setAuthenticatedUser } = useAuth()
  const { translate } = useI18n()

  const onLoginFormSubmit = async (formData: FormData) => {
    setIsLoginFormSubmitting(true)

    const userNameOrEmail = formData.get(AUTH_FORM_FIELDS.usernameOrEmail) as string
    const password = formData.get(AUTH_FORM_FIELDS.password) as string
    const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

    const credentials: LoginCredentials = { userNameOrEmail, password }
    const loginResult = await AuthService.login(credentials, shouldRemember)

    console.log(loginResult)

    if (loginResult.status === 'error') {
      setIsLoginFormSubmitting(false)
      //! display error messages
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
