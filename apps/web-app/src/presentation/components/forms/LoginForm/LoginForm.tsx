import { LogInIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import type { LoginCredentials } from '@shared-types/auth'

import { useAuth, useI18n } from '@/application/hooks'
import { AuthService } from '@/application/services'
import { AUTH_FORM_FIELDS, type AuthFormFields } from '@/domain/auth'
import { FieldSet, Form, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'
import type { ValidationErrors } from '@/presentation/utils'

import './LoginForm.styles.sass'

type LoginFormValidationErrors = ValidationErrors<AuthFormFields>

export const LoginForm: FC = () => {
  const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false)
  const [loginFormValidationErrors, setLoginFormValidationErrors] = useState<LoginFormValidationErrors>()

  const { setAuthenticatedUser } = useAuth()
  const { translate } = useI18n()

  const onLoginFormSubmit = async (formData: FormData) => {
    setIsLoginFormSubmitting(true)

    const username = formData.get(AUTH_FORM_FIELDS.username) as string
    const password = formData.get(AUTH_FORM_FIELDS.password) as string
    const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

    const credentials: LoginCredentials = { username, password }
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
      className='login-form'
      onSubmit={onLoginFormSubmit}
      validationErrors={loginFormValidationErrors}
    >
      <FieldSet
        className='login-form__field-set'
        isDisabled={isLoginFormSubmitting}
      >
        <UserNameField />

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
