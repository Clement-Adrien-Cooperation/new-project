import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTHENTICATION_FORM_FIELDS } from '@/domain/authentication'
import { Checkbox, type CheckboxProps } from '@/presentation/components/forms/Checkbox'

import './RememberMeCheckbox.styles.sass'

export const RememberMeCheckbox: FC<CheckboxProps> = (rememberMeCheckboxProps) => {
  const { translate } = useI18n()

  return (
    <Checkbox
      className='remember-me-checkbox'
      name={AUTHENTICATION_FORM_FIELDS.rememberMe}
      {...rememberMeCheckboxProps}
    >
      {translate('components.forms.fields.rememberMeCheckboxLabel')}
    </Checkbox>
  )
}
