import { MailIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { TextField, type TextFieldProps } from '@/presentation/components'

export const EmailField: FC<TextFieldProps> = (emailFieldProps) => {
  const { translate } = useI18n()

  return (
    <TextField
      isRequired
      LeftIcon={<MailIcon />}
      label={translate('components.forms.fields.email.label')}
      name={AUTH_FORM_FIELDS.email}
      placeholder={translate('components.forms.fields.email.placeholder')}
      type='email'
      {...emailFieldProps}
    />
  )
}
