import type { FC } from 'react'
import { Button as ReactAriaButton, type ButtonProps as ReactAriaButtonProps } from 'react-aria-components'

import { mergeReactAriaPressableClassNames, type PressableProps } from './Pressable'
import { Spinner } from '../Spinner'

type ButtonProps = PressableProps & ReactAriaButtonProps

const renderButtonIcon = (Icon: ButtonProps['Icon'], variant: ButtonProps['variant'], isPending: boolean) => {
  if (variant == null) {
    return null
  }

  if (isPending && Icon != null) {
    return <Spinner />
  }

  return Icon
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
