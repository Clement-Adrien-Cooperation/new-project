import type { ComponentProps, FC } from 'react'

import { type GlobalFormErrors, mergeClassNames, type ValidationErrors } from '@/presentation/utils'

import './FormErrors.styles.sass'

type FormErrorsProps = ComponentProps<'ul'> & {
  errors?: ValidationErrors<GlobalFormErrors>
}

export const FormErrors: FC<FormErrorsProps> = ({ className, errors, ...formErrorProps }) => {
  if (!errors?.form) {
    return null
  }

  const errorsList = Array.isArray(errors.form) && errors.form.length === 1
    ? errors.form[0]
    : errors.form

  return (
    <ul className={mergeClassNames('form-errors', className)} {...formErrorProps}>
      {Array.isArray(errorsList)
        ? errorsList.map(error => <div key={error}>• {error}</div>)
        : <li className='unique'>{errorsList}</li>
      }
    </ul>
  )
}
