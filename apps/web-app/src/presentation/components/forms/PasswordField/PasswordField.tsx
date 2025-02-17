import { EyeIcon, EyeOffIcon, LockKeyholeIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { Button, TextField, type TextFieldProps } from '@/presentation/components'

import './PasswordField.styles.sass'

export type PasswordFieldProps = TextFieldProps

export const PasswordField: FC<PasswordFieldProps> = ({
  label,
  LeftIcon,
  onChange,
  placeholder,
  RightContent,
  type,
  value,
  ...passwordFieldProps
}) => {
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
      {...passwordFieldProps}
      label={label ?? translate('components.forms.passwordField.label')}
      LeftIcon={LeftIcon ?? <LockKeyholeIcon />}
      onChange={onPasswordFieldChange}
      placeholder={placeholder ?? translate('components.forms.passwordField.placeholder')}
      RightContent={RightContent ?? renderPasswordFieldRightContent()}
      type={type ?? isPasswordVisible ? 'text' : 'password'}
      value={passwordFieldValue}
    />
  )
}
