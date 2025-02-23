import type { FC, ReactNode } from 'react'
import { type LinkRenderProps, Link as ReactAriaLink, type LinkProps as ReactAriaLinkProps } from 'react-aria-components'

import { Tooltip } from '@/presentation/components'

import { mergeReactAriaPressableClassNames, type PressableProps } from './Pressable'

type LinkProps = PressableProps & ReactAriaLinkProps

type LinkRenderPropsValues = LinkRenderProps & { defaultChildren: ReactNode | undefined }

const renderLinkChildren = (children: LinkProps['children'], renderValues: LinkRenderPropsValues) => {
  return typeof children === 'function' ? children(renderValues) : children
}

const BaseLink: FC<LinkProps> = ({
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
    {(values) => variant == null
      ? renderLinkChildren(children, values)
      : <>
          {Icon && (
            <div className='pressable__icon' role='presentation'>
              {Icon}
            </div>
          )}

          {children != null && (
            <div className='pressable__content'>
              {renderLinkChildren(children, values)}
            </div>
          )}
        </>
    }
  </ReactAriaLink>
)

export const Link: FC<LinkProps> = ({ tooltip, ...linkProps }) => {
  if (tooltip != null) {
    return (
      <Tooltip Trigger={<BaseLink {...linkProps} />}>
        {tooltip}
      </Tooltip>
    )
  }

  return <BaseLink {...linkProps} />
}
