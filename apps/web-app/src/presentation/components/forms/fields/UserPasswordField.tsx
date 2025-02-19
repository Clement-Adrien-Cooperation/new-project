import type { FC } from 'react'

import { PASSWORD_RULES, validatePassword } from '@shared-types/auth'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { PasswordField, type PasswordFieldProps } from '@/presentation/components'

export const UserPasswordField: FC<PasswordFieldProps> = ({ validate, ...userPasswordFieldProps }) => {
  const { translate } = useI18n()

  const passwordTooLong = translate('components.forms.fields.userPassword.errors.tooLong', { smart_count: PASSWORD_RULES.maxLength })
  const passwordTooShort = translate('components.forms.fields.userPassword.errors.tooShort', { smart_count: PASSWORD_RULES.minLength })
  const passwordRequireNumber = translate('components.forms.fields.userPassword.errors.requireNumber')
  const passwordRequireSpecialCharacter = translate('components.forms.fields.userPassword.errors.requireSpecialCharacter')
  const unexpectedError = translate('errors.unexpected')

  const validatePasswordField = (value: string) => {
    const passwordValidationResult = validatePassword(value)

    const baseValidation = validate?.(value)

    const passwordFieldsErrors = Array.isArray(baseValidation)
      ? baseValidation.filter((v): v is string => Boolean(v))
      : typeof baseValidation === 'string'
        ? [baseValidation]
        : []

    if (passwordValidationResult.status === 'success') {
      return passwordFieldsErrors
    }

    for (const error of passwordValidationResult.errors) {
      switch (error) {
        case 'password-require-number':
          passwordFieldsErrors.push(passwordRequireNumber)
          break
        case 'password-require-special-char':
          passwordFieldsErrors.push(passwordRequireSpecialCharacter)
          break
        case 'password-too-long':
          passwordFieldsErrors.push(passwordTooLong)
          break
        case 'password-too-short':
          passwordFieldsErrors.push(passwordTooShort)
          break
        case 'unexpected-error':
        default:
          passwordFieldsErrors.push(unexpectedError)
      }
    }

    return passwordFieldsErrors
  }

  return (
    <PasswordField
      isRequired
      label={translate('components.forms.fields.userPassword.label')}
      maxLength={PASSWORD_RULES.maxLength}
      minLength={PASSWORD_RULES.minLength}
      name={AUTH_FORM_FIELDS.password}
      placeholder={translate('components.forms.fields.userPassword.placeholder')}
      validate={validatePasswordField}
      {...userPasswordFieldProps}
    />
  )
}
