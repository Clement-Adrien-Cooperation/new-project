import type { FC } from 'react'

import { USERNAME_RULES, validateUsername } from '@shared-types/auth'

import { useI18n } from '@/application/hooks'
import { type TextFieldProps, UserNameField } from '@/presentation/components'

export const ValidUserNameField: FC<TextFieldProps> = (validUserNameFieldProps) => {
  const { translate } = useI18n()

  const unexpectedError = translate('errors.unexpected')
  const usernameInvalidCharacters = translate('components.forms.fields.validUserName.errors.invalidCharacters')
  const usernameNoSpaces = translate('components.forms.fields.validUserName.errors.noSpaces')
  const usernameTooLong = translate('components.forms.fields.validUserName.errors.tooLong', { smart_count: USERNAME_RULES.maxLength })
  const usernameTooShort = translate('components.forms.fields.validUserName.errors.tooShort', { smart_count: USERNAME_RULES.minLength })

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
    <UserNameField
      maxLength={USERNAME_RULES.maxLength}
      minLength={USERNAME_RULES.minLength}
      validate={validateUsernameField}
      {...validUserNameFieldProps}
    />
  )
}
