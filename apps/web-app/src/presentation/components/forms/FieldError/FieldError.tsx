import type { FC } from 'react'
import { type FieldErrorProps, FieldError as ReactAriaFieldError } from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './FieldError.styles.sass'

export const FieldError: FC<FieldErrorProps> = ({ className, ...fieldErrorProps }) => (
  <ReactAriaFieldError
    className={values => mergeReactAriaClassNames(values, className, 'field-error')}
    {...fieldErrorProps}
  >
    {({ validationErrors }) => {
      if (validationErrors.length === 1) {
        return <div>{validationErrors[0]}</div>
      }

      return validationErrors.map(error => <div key={error}>• {error}</div>)
    }}
  </ReactAriaFieldError>
)
