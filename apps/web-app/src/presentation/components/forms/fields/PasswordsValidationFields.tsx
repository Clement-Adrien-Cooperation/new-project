import { type FC, useState } from 'react'

import { PASSWORD_RULES, validatePassword } from '@shared-types/auth'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { getStringArray } from '@/infrastructure/utils'
import { UserPasswordField } from '@/presentation/components'

import './PasswordsValidationFields.styles.sass'

const commonPasswordFieldProps = {
  maxLength: PASSWORD_RULES.maxLength,
  minLength: PASSWORD_RULES.minLength
}

export const PasswordsValidationFields: FC = () => {
  const [passwordValue, setPasswordValue] = useState('')

  const { translate } = useI18n()

  const passwordTooLong = translate('components.forms.fields.userPassword.errors.tooLong', { smart_count: PASSWORD_RULES.maxLength })
  const passwordTooShort = translate('components.forms.fields.userPassword.errors.tooShort', { smart_count: PASSWORD_RULES.minLength })
  const passwordRequireNumber = translate('components.forms.fields.userPassword.errors.requireNumber')
  const passwordRequireSpecialCharacter = translate('components.forms.fields.userPassword.errors.requireSpecialCharacter')
  const passwordsDonTMatch = translate('components.forms.fields.passwordsValidation.errors.passwordsDonTMatch')
  const unexpectedError = translate('errors.unexpected')

  const validatePasswordField = (value: string) => {
    const passwordValidationResult = validatePassword(value)

    if (passwordValidationResult.status === 'success') {
      return true
    }

    const passwordFieldsErrors: string[] = []

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

  const validatePasswordConfirmationField = (value: string) => {
    const baseValidation = validatePasswordField(value)

    const passwordFieldsErrors = getStringArray(baseValidation)

    if (value !== passwordValue) {
      passwordFieldsErrors.push(passwordsDonTMatch)
    }

    return passwordFieldsErrors
  }

  return (
    <>
      <UserPasswordField
        {...commonPasswordFieldProps}
        onChange={setPasswordValue}
        validate={validatePasswordField}
        value={passwordValue}
      />

      <UserPasswordField
        {...commonPasswordFieldProps}
        label={translate('components.forms.fields.passwordsValidation.confirmPasswordLabel')}
        name={AUTH_FORM_FIELDS.confirmPassword}
        placeholder={translate('components.forms.fields.passwordsValidation.confirmPasswordPlaceholder')}
        validate={validatePasswordConfirmationField}
      />
    </>
  )
}
