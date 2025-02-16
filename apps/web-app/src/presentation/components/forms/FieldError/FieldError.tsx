import type { FC } from 'react'
import { FieldError as ReactAriaFieldError, type FieldErrorProps as ReactAriaFieldErrorProps } from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './FieldError.styles.sass'

type FieldErrorProps = ReactAriaFieldErrorProps & {

}

export const FieldError: FC<FieldErrorProps> = ({ className, ...fieldErrorProps }) => {
  return (
    <ReactAriaFieldError
      className={values => mergeReactAriaClassNames(values, className, 'field-error')}
      {...fieldErrorProps}
    >
      {/* {values => {
        console.log({ values })
        return (
          <>test</>
        )
      }} */}
    </ReactAriaFieldError>
  )
}
