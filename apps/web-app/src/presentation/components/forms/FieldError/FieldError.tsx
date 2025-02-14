import type { FC } from 'react'
import { FieldError as ReactAriaFieldError, type FieldErrorProps as ReactAriaFieldErrorProps } from 'react-aria-components'

import './FieldError.styles.sass'
import { mergeReactAriaClassNames } from '@/presentation/utils'

type FieldErrorProps = ReactAriaFieldErrorProps & {

}

export const FieldError: FC<FieldErrorProps> = ({ className, ...fieldErrorProps }) => {
  return (
    <ReactAriaFieldError
      className={values => mergeReactAriaClassNames(values, className, 'field-error')}
      {...fieldErrorProps}
    >

    </ReactAriaFieldError>
  )
}
