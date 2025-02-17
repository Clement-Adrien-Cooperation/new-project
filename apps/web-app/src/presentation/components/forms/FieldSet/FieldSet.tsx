import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './FieldSet.styles.sass'

type FieldSetProps = Omit<ComponentProps<'fieldset'>, 'disabled'> & {
  /** Disable interactive element in children */
  isDisabled?: boolean
}

export const FieldSet: FC<FieldSetProps> = ({ className, isDisabled, ...fieldsetProps }) => (
  <fieldset
    className={mergeClassNames('field-set', className)}
    disabled={isDisabled}
    {...fieldsetProps}
  />
)
