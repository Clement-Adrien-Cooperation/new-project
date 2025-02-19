import type { ComponentProps, FC } from 'react'

import { useI18n } from '@/application/hooks'
import { mergeClassNames } from '@/presentation/utils'

import './RequiredFieldsMessage.styles.sass'

type RequiredFieldsMessageProps = Omit<ComponentProps<'span'>, 'children'>

export const RequiredFieldsMessage: FC<RequiredFieldsMessageProps> = ({ className, ...requiredFieldsMessageProps }) => {
  const { translate } = useI18n()

  return (
    <span {...requiredFieldsMessageProps} className={mergeClassNames('required-fields-message', className)}>
      {translate('components.forms.requiredFieldsMessage')}
    </span>
  )
}
