import type { FC } from 'react'
import { Form as ReactAriaForm, type FormProps as ReactAriaFormProps } from 'react-aria-components'

import { mergeClassNames } from '@/presentation/utils'

import './Form.styles.sass'

export type FormProps = Omit<ReactAriaFormProps, 'onSubmit'> & {
  /** Callback to be called when the form is submitted */
  onSubmit?: (formData: FormData) => void
}

export const Form: FC<FormProps> = ({
  className,
  onSubmit,
  ...formProps
}) => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!onSubmit) {
      return
    }

    const formData = new FormData(event.currentTarget)
    onSubmit(formData)
  }

  return (
    <ReactAriaForm
      className={mergeClassNames('form', className)}
      onSubmit={onFormSubmit}
      {...formProps}
    />
  )
}
