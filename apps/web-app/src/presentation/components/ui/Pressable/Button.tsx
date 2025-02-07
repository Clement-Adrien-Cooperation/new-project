import type { FC } from 'react'
import { Button as ReactAriaButton, type ButtonProps as ReactAriaButtonProps } from 'react-aria-components'

import { mergeReactAriaPressableClassNames, type PressableProps } from '@/presentation/components/ui/Pressable'
import { Spinner } from '@/presentation/components'

type ButtonProps = PressableProps & ReactAriaButtonProps

const renderButtonIcon = (Icon: ButtonProps['Icon'], variant: ButtonProps['variant'], isPending: boolean) => {
  if (variant == null) {
    return null
  }

  return (
    <div role='presentation'>
      {isPending && Icon != null ? <Spinner /> : Icon}
    </div>
  )
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  Icon,
  iconSide,
  size,
  variant,
  ...buttonProps
}) => (
  <ReactAriaButton
    className={(values) => mergeReactAriaPressableClassNames(
      values,
      className,
      variant,
      Icon,
      iconSide,
      size,
      children
    )}
    {...buttonProps}
  >
    {(values) => (
      <>
        {renderButtonIcon(Icon, variant, values.isPending)}

        {typeof children === 'function'
          ? children(values)
          : children
        }
      </>
    )}
  </ReactAriaButton>
)
