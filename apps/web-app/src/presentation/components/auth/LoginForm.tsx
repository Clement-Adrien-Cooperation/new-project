import { LogInIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import { useAuth, useI18n } from '@/application/hooks'
import { AuthService, type LoginCredentials } from '@/application/services'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { FieldSet, Form, FormErrors, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'

import { getLoginFormValidationErrors, type LoginFormValidationErrors } from './LoginForm.validation.ts'

export const LoginForm: FC = () => {
  const [isLoginFormSubmitting, setIsLoginFormSubmitting] = useState(false)
  const [loginFormValidationErrors, setLoginFormValidationErrors] = useState<LoginFormValidationErrors>()

  const { setAuthenticatedUser } = useAuth()
  const { translate } = useI18n()

  const onLoginFormSubmit = async (formData: FormData) => {
    try {
      setIsLoginFormSubmitting(true)
      setLoginFormValidationErrors(undefined)

      const userNameOrEmail = formData.get(AUTH_FORM_FIELDS.usernameOrEmail) as string
      const password = formData.get(AUTH_FORM_FIELDS.password) as string
      const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

      const credentials: LoginCredentials = { userNameOrEmail, password, shouldRemember }
      const loginResult = await AuthService.login(credentials)

      if (loginResult.status === 'error') {
        const newValidationErrors = getLoginFormValidationErrors(loginResult.errors, translate)
        setLoginFormValidationErrors(newValidationErrors)
        return
      }

      setAuthenticatedUser(loginResult.data)
    } catch (error) {
      console.error('Error while submitting login form:', error)
      setLoginFormValidationErrors({ form: translate('errors.unexpected') })
    } finally {
      setIsLoginFormSubmitting(false)
    }
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
