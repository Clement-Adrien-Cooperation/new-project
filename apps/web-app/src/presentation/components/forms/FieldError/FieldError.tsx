import type { FC } from 'react'
import { type FieldErrorProps, FieldError as ReactAriaFieldError } from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './FieldError.styles.sass'

export const FieldError: FC<FieldErrorProps> = ({ className, ...fieldErrorProps }) => (
  <ReactAriaFieldError
    className={values => mergeReactAriaClassNames(values, className, 'field-error')}
    {...fieldErrorProps}
  >
    {values => values.validationErrors.length === 1
      ? <div>{values.validationErrors[0]}</div>
      : values.validationErrors.map(error => (
          <div key={error}>
            • {error}
          </div>
        ))
    }
  </ReactAriaFieldError>
)
