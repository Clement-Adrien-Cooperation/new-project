import type { FC } from 'react'
import { FieldError as ReactAriaFieldError, type FieldErrorProps as ReactAriaFieldErrorProps } from 'react-aria-components'

import './FieldError.styles.sass'

type FieldErrorProps = ReactAriaFieldErrorProps & {

}

export const FieldError: FC<FieldErrorProps> = ({ ...fieldErrorProps }) => {
  return (
    <ReactAriaFieldError {...fieldErrorProps}>

    </ReactAriaFieldError>
  )
}
