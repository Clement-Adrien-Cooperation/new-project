import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTHENTICATION_FORM_FIELDS } from '@/domain/authentication'
import { Form, type FormProps, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField, UserPasswordField } from '@/presentation/components'
import { mergeClassNames } from '@/presentation/utils'

import './LoginForm.styles.sass'

export const LoginForm: FC<FormProps> = ({ className, ...loginFormProps }) => {
  const { translate } = useI18n()

  const onLoginFormSubmit = (formData: FormData) => {
    const username = formData.get(AUTHENTICATION_FORM_FIELDS.username)
    const password = formData.get(AUTHENTICATION_FORM_FIELDS.password)
    const shouldRemember = formData.get(AUTHENTICATION_FORM_FIELDS.rememberMe) === 'on'

    console.log('username:', username)
    console.log('password:', password)
    console.log('rememberMe:', shouldRemember)
  }

  return (
    <Form
      className={mergeClassNames('login-form', className)}
      onSubmit={onLoginFormSubmit}
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
