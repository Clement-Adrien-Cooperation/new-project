import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { UserPasswordField } from '@/presentation/components'

import './PasswordsValidationFields.styles.sass'

export const PasswordsValidationFields: FC = () => {
  const [passwordValue, setPasswordValue] = useState('')

  const { translate } = useI18n()

  const passwordsDonTMatch = translate('components.forms.fields.passwordsValidation.errors.passwordsDonTMatch')

  const validatePasswordConfirmationField = (value: string) => {
    const passwordFieldsErrors: string[] = []

    if (value !== passwordValue) {
      passwordFieldsErrors.push(passwordsDonTMatch)
    }

    return passwordFieldsErrors
  }

  return (
    <>
      <UserPasswordField
        onChange={setPasswordValue}
        value={passwordValue}
      />

      <UserPasswordField
        label={translate('components.forms.fields.passwordsValidation.confirmPasswordLabel')}
        name={AUTH_FORM_FIELDS.confirmPassword}
        placeholder={translate('components.forms.fields.passwordsValidation.confirmPasswordPlaceholder')}
        validate={validatePasswordConfirmationField}
      />
    </>
  )
}
