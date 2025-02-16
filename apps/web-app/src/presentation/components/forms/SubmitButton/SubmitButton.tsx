import { Button, type ButtonProps, type PressableVariant } from '@/presentation/components'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './SubmitButton.styles.sass'

type SubmitButtonProps <T extends PressableVariant = 'filled'> = Omit<ButtonProps, 'variant'> & {
  /** The visual style variant of the button. */
  variant?: T
}

export function SubmitButton <T extends PressableVariant = 'filled'> ({ className, variant, ...submitButtonProps }: SubmitButtonProps<T>) {
  return (
    <Button
      className={values => mergeReactAriaClassNames(values, className, 'submit-button')}
      type='submit'
      variant={variant ?? 'filled'}
      {...submitButtonProps}
    />
  )
}
