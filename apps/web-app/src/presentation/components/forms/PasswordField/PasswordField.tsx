import { EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react'
import { type FC, useState } from 'react'

import { useI18n } from '@/application/hooks'
import { Button, TextField, type TextFieldProps } from '@/presentation/components'

import './PasswordField.styles.sass'

export const PasswordField: FC<TextFieldProps> = ({
  label,
  LeftIcon,
  placeholder,
  RightIcon,
  type,
  ...passwordFieldProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const { translate } = useI18n()

  const renderPasswordFieldRightIcon = () => {
    if (RightIcon) {
      return RightIcon
    }

    return (
      <Button
        className='password-field__right-icon-button'
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
      LeftIcon={LeftIcon ?? <LockIcon />}
      placeholder={placeholder ?? translate('components.forms.passwordField.placeholder')}
      RightIcon={renderPasswordFieldRightIcon()}
      type={type ?? isPasswordVisible ? 'text' : 'password'}
    />
  )
}
