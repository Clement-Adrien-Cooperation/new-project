import { EyeIcon, EyeOffIcon, LockKeyholeIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { Button, TextField, type TextFieldProps } from '@/presentation/components'

import './PasswordField.styles.sass'

export type PasswordFieldProps = TextFieldProps

export const PasswordField: FC<PasswordFieldProps> = ({ onChange, value, ...passwordFieldProps }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [passwordFieldValue, setPasswordFieldValue] = useState(value ?? '')

  const { translate } = useI18n()

  const onPasswordFieldChange = (value: string) => {
    setPasswordFieldValue(value)
    onChange?.(value)
  }

  const renderPasswordFieldRightContent = () => {
    if (!passwordFieldValue) {
      return undefined
    }

    return (
      <Button
        className='password-field__right-content'
        onPress={() => setIsPasswordVisible(prev => !prev)}
      >
        {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    )
  }

  return (
    <TextField
      label={translate('components.forms.passwordField.label')}
      LeftIcon={<LockKeyholeIcon />}
      onChange={onPasswordFieldChange}
      placeholder={translate('components.forms.passwordField.placeholder')}
      RightContent={renderPasswordFieldRightContent()}
      type={isPasswordVisible ? 'text' : 'password'}
      value={passwordFieldValue}
      {...passwordFieldProps}
    />
  )
}
