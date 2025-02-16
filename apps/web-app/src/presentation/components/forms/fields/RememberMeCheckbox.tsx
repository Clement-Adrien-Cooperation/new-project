import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { AUTH_FORM_FIELDS } from '@/domain/auth'
import { Checkbox, type CheckboxProps } from '@/presentation/components/forms/Checkbox'

import './RememberMeCheckbox.styles.sass'

export const RememberMeCheckbox: FC<CheckboxProps> = (rememberMeCheckboxProps) => {
  const { translate } = useI18n()

  return (
    <Checkbox
      className='remember-me-checkbox'
      name={AUTH_FORM_FIELDS.shouldRemember}
      {...rememberMeCheckboxProps}
    >
      {translate('components.forms.fields.rememberMeCheckboxLabel')}
    </Checkbox>
  )
}
