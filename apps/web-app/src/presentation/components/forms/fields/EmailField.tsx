import { MailIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { TextField, type TextFieldProps } from '@/presentation/components'
import { validateEmail } from '@shared-types/auth'

export const EmailField: FC<TextFieldProps> = (emailFieldProps) => {
  const { translate } = useI18n()

  const unexpectedError = translate('errors.unexpected')
  const emailInvalid = translate('components.forms.fields.email.errors.invalid')

  const validateEmailField = (value: string) => {
    const emailValidationResult = validateEmail(value)

    if (emailValidationResult.status === 'success') {
      return null
    }

    const emailFieldsErrors: string[] = []

    for (const error of emailValidationResult.errors) {
      switch (error) {
        case 'email-invalid':
          emailFieldsErrors.push(emailInvalid)
          break
        case 'unexpected-error':
        default:
          emailFieldsErrors.push(unexpectedError)
      }
    }

    return emailFieldsErrors
  }

  return (
    <TextField
      isRequired
      LeftIcon={<MailIcon />}
      label={translate('components.forms.fields.email.label')}
      name={AUTH_FORM_FIELDS.email}
      placeholder={translate('components.forms.fields.email.placeholder')}
      type='email'
      validate={validateEmailField}
      {...emailFieldProps}
    />
  )
}
