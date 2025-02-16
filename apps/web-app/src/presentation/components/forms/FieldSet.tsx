import type { ComponentProps, FC } from 'react'

type FieldSetProps = Omit<ComponentProps<'fieldset'>, 'disabled'> & {
  /** Disable interactive element in children */
  isDisabled?: boolean
}

export const FieldSet: FC<FieldSetProps> = ({ isDisabled, ...fieldsetProps }) => (
  <fieldset disabled={isDisabled} {...fieldsetProps} />
)
