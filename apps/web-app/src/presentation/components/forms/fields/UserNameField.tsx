import { UserIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTHENTICATION_FORM_FIELDS } from '@/domain/authentication'
import { TextField, type TextFieldProps } from '@/presentation/components'

export const UserNameField: FC<TextFieldProps> = (userNameFieldProps) => {
  const { translate } = useI18n()

  return (
    <TextField
      isRequired
      LeftIcon={<UserIcon />}
      label={translate('components.forms.fields.userName.label')}
      name={AUTHENTICATION_FORM_FIELDS.username}
      placeholder={translate('components.forms.fields.userName.placeholder')}
      {...userNameFieldProps}
    />
  )
}
