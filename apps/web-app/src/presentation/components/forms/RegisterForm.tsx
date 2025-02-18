import { UserPlusIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { AuthService, type RegisterCredentials } from '@/application/services'
import { AUTH_FORM_FIELDS, type AuthFormField } from '@/domain/auth'
import { EmailField, FieldSet, Form, FormErrors, PasswordsValidationFields, RememberMeCheckbox, RequiredFieldsMessage, SubmitButton, UserNameField } from '@/presentation/components'
import type { ValidationErrors } from '@/presentation/utils'

type RegisterFormValidationErrors = ValidationErrors<AuthFormField>

export const RegisterForm: FC = () => {
  const [isRegisterFormSubmitting, setIsRegisterFormSubmitting] = useState(false)
  const [registerFormValidationErrors, _setRegisterFormValidationErrors] = useState<RegisterFormValidationErrors>()

  const { translate } = useI18n()

  const onRegisterFormSubmit = async (formData: FormData) => {
    setIsRegisterFormSubmitting(true)

    const username = formData.get(AUTH_FORM_FIELDS.username) as string
    const email = formData.get(AUTH_FORM_FIELDS.email) as string
    const password = formData.get(AUTH_FORM_FIELDS.password) as string
    const confirmPassword = formData.get(AUTH_FORM_FIELDS.confirmPassword) as string
    const shouldRemember = formData.get(AUTH_FORM_FIELDS.shouldRemember) === 'on'

    const registerCredentials: RegisterCredentials = { username, email, password, confirmPassword, shouldRemember }
    const registerResult = await AuthService.register(registerCredentials)

    console.log('final result : ', registerResult)

    setIsRegisterFormSubmitting(false)
  }

  return (
    <Form
      onSubmit={onRegisterFormSubmit}
      validationErrors={registerFormValidationErrors}
    >
      <FieldSet isDisabled={isRegisterFormSubmitting}>
        <FormErrors errors={registerFormValidationErrors} />

        <UserNameField />

        <EmailField />

        <PasswordsValidationFields />

        <RememberMeCheckbox />

        <RequiredFieldsMessage />
      </FieldSet>

      <SubmitButton
        Icon={<UserPlusIcon />}
        isPending={isRegisterFormSubmitting}
      >
        {translate('components.forms.registerForm.submit')}
      </SubmitButton>
    </Form>
  )
}
