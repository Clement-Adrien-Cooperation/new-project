import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { UserPasswordField } from '@/presentation/components'

import './PasswordsValidationFields.styles.sass'
import { PASSWORD_RULES, validatePassword } from '@shared-types/auth'

export const PasswordsValidationFields: FC = () => {
  const [passwordValue, setPasswordValue] = useState('')

  const { translate } = useI18n()

  const passwordsDonTMatch = translate('components.forms.fields.passwordsValidation.errors.passwordsDonTMatch')
  const passwordTooLong = translate('components.forms.fields.userPassword.errors.tooLong', { smart_count: PASSWORD_RULES.maxLength })
  const passwordTooShort = translate('components.forms.fields.userPassword.errors.tooShort', { smart_count: PASSWORD_RULES.minLength })
  const passwordRequireNumber = translate('components.forms.fields.userPassword.errors.requireNumber')
  const passwordRequireSpecialCharacter = translate('components.forms.fields.userPassword.errors.requireSpecialCharacter')
  const unexpectedError = translate('errors.unexpected')

  //?
  //! que faire du validate que j'ai extrait des props
  //! pour l'utiliser à la fois dans UserPasswordField et PasswordsValidationFields ?
  //?

  const validatePasswordConfirmationField = (value: string) => {
    const passwordFieldsErrors: string[] = []

    if (value !== passwordValue) {
      passwordFieldsErrors.push(passwordsDonTMatch)
    }

    const passwordValidationResult = validatePassword(value)

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
    <>
      <UserPasswordField
        onChange={setPasswordValue}
        value={passwordValue}
      />

      <UserPasswordField
        label={translate('components.forms.fields.passwordsValidation.confirmPasswordLabel')}
        name={AUTH_FORM_FIELDS.confirmPassword}
        placeholder={translate('components.forms.fields.passwordsValidation.confirmPasswordPlaceholder')}
        validate={validatePasswordConfirmationField}
      />
    </>
  )
}
