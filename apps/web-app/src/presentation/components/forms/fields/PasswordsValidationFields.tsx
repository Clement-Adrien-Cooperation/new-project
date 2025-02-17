import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { UserPasswordField } from '@/presentation/components'

import './PasswordsValidationFields.styles.sass'

export const PasswordsValidationFields: FC = () => {
  const { translate } = useI18n()

  return (
    <>
      <UserPasswordField />

      <UserPasswordField
        label={translate('components.forms.fields.passwordsValidation.confirmPasswordLabel')}
        name={AUTH_FORM_FIELDS.confirmPassword}
        placeholder={translate('components.forms.fields.passwordsValidation.confirmPasswordPlaceholder')}
      />
    </>
  )
}
