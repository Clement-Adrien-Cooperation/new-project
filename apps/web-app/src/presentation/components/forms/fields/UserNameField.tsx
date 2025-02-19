import { UserIcon } from 'lucide-react'
import type { FC } from 'react'

import { USERNAME_RULES, validateUsername } from '@shared-types/auth'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { TextField, type TextFieldProps } from '@/presentation/components'

export const UserNameField: FC<TextFieldProps> = (userNameFieldProps) => {
  const { translate } = useI18n()

  const unexpectedError = translate('errors.unexpected')
  const usernameInvalidCharacters = translate('components.forms.fields.userName.errors.invalidCharacters')
  const usernameNoSpaces = translate('components.forms.fields.userName.errors.noSpaces')
  const usernameTooLong = translate('components.forms.fields.userName.errors.tooLong', { smart_count: USERNAME_RULES.maxLength })
  const usernameTooShort = translate('components.forms.fields.userName.errors.tooShort', { smart_count: USERNAME_RULES.minLength })

  const validateUsernameField = (value: string) => {
    const usernameValidationResult = validateUsername(value)

    if (usernameValidationResult.status === 'success') {
      return null
    }

    const usernameFieldsErrors: string[] = []

    for (const error of usernameValidationResult.errors) {
      switch (error) {
        case 'username-invalid-characters':
          usernameFieldsErrors.push(usernameInvalidCharacters)
          break
        case 'username-no-spaces':
          usernameFieldsErrors.push(usernameNoSpaces)
          break
        case 'username-too-long':
          usernameFieldsErrors.push(usernameTooLong)
          break
        case 'username-too-short':
          usernameFieldsErrors.push(usernameTooShort)
          break
        case 'unexpected-error':
        default:
          usernameFieldsErrors.push(unexpectedError)
      }
    }

    return usernameFieldsErrors
  }

  return (
    <TextField
      isRequired
      LeftIcon={<UserIcon />}
      label={translate('components.forms.fields.userName.label')}
      maxLength={USERNAME_RULES.maxLength}
      minLength={USERNAME_RULES.minLength}
      name={AUTH_FORM_FIELDS.username}
      placeholder={translate('components.forms.fields.userName.placeholder')}
      validate={validateUsernameField}
      {...userNameFieldProps}
    />
  )
}
