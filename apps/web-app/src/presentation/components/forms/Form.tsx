import type { FC } from 'react'
import { Form as ReactAriaForm, type FormProps as ReactAriaFormProps } from 'react-aria-components'

export type FormProps = Omit<ReactAriaFormProps, 'onSubmit'> & {
  /** Disable form and every interactive element in it */
  isDisabled?: boolean

  /** Callback to be called when the form is submitted */
  onSubmit?: (formData: FormData) => void
}

export const Form: FC<FormProps> = ({
  children,
  className,
  isDisabled = false,
  onSubmit,
  ...formProps
}) => {
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isDisabled || !onSubmit) {
      return
    }

    const formData = new FormData(event.currentTarget)
    onSubmit(formData)
  }

  return (
    <ReactAriaForm
      onSubmit={onFormSubmit}
      {...formProps}
    >
      <fieldset className={className} disabled={isDisabled}>
        {children}
      </fieldset>
    </ReactAriaForm>
  )
}
