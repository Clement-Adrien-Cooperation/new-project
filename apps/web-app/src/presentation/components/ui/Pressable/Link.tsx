import type { FC } from 'react'
import { Link as ReactAriaLink, type LinkProps as ReactAriaLinkProps } from 'react-aria-components'

import { mergeReactAriaPressableClassNames, type PressableProps } from '@/presentation/components/ui/Pressable'

type LinkProps = PressableProps & ReactAriaLinkProps

export const Link: FC<LinkProps> = ({
  children,
  className,
  Icon,
  iconSide,
  size,
  variant,
  ...linkProps
}) => (
  <ReactAriaLink
    className={(values) => mergeReactAriaPressableClassNames(
      values,
      className,
      variant,
      Icon,
      iconSide,
      size,
      children
    )}
    {...linkProps}
  >
    {(values) => (
      <>
        {Icon}

        {typeof children === 'function'
          ? children(values)
          : children
        }
      </>
    )}
  </ReactAriaLink>
)
