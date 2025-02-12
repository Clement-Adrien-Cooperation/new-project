import type { FC } from 'react'
import { Form as ReactAriaForm, type FormProps as ReactAriaFormProps } from 'react-aria-components'

type FormProps = ReactAriaFormProps & {
  /** Disable form and every interactive element in it */
  isDisabled?: boolean
}

export const Form: FC<FormProps> = ({
  action,
  children,
  className,
  isDisabled = false,
  onSubmit,
  ...formProps
}) => {
  const onFormAction = (formData: FormData) => {
    if (!isDisabled && typeof action === 'function') {
      action(formData)
    }
  }

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isDisabled) {
      onSubmit?.(event)
    }
  }

  return (
    <ReactAriaForm
      action={typeof action === 'function' ? onFormAction : action}
      onSubmit={onFormSubmit}
      {...formProps}
    >
      <fieldset className={className} disabled={isDisabled}>
        {children}
      </fieldset>
    </ReactAriaForm>
  )
}
