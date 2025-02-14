import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTHENTICATION_FORM_FIELDS } from '@/domain/authentication'
import { PasswordField, type PasswordFieldProps } from '@/presentation/components'

export const UserPasswordField: FC<PasswordFieldProps> = (userPasswordFieldProps) => {
  const { translate } = useI18n()

  return (
    <PasswordField
      isRequired
      label={translate('components.forms.fields.userPassword.label')}
      name={AUTHENTICATION_FORM_FIELDS.password}
      placeholder={translate('components.forms.fields.userPassword.placeholder')}
      {...userPasswordFieldProps}
    />
  )
}
