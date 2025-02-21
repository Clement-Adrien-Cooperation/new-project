import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { PasswordField, type PasswordFieldProps } from '@/presentation/components'

export const UserPasswordField: FC<PasswordFieldProps> = (userPasswordFieldProps) => {
  const { translate } = useI18n()

  return (
    <PasswordField
      isRequired
      label={translate('components.forms.fields.userPassword.label')}
      name={AUTH_FORM_FIELDS.password}
      placeholder={translate('components.forms.fields.userPassword.placeholder')}
      {...userPasswordFieldProps}
    />
  )
}
