import type { FC, ReactNode } from 'react'
import { type ButtonRenderProps, Button as ReactAriaButton, type ButtonProps as ReactAriaButtonProps } from 'react-aria-components'

import { mergeReactAriaPressableClassNames, type PressableProps } from '@/presentation/components/ui/Pressable'
import { Spinner } from '@/presentation/components'

type ButtonProps = PressableProps & ReactAriaButtonProps

type ButtonRenderPropsValues = ButtonRenderProps & { defaultChildren: ReactNode | undefined }

const renderButtonChildren = (children: ButtonProps['children'], renderValues: ButtonRenderPropsValues) => {
  return typeof children === 'function' ? children(renderValues) : children
}

const renderButtonIcon = (Icon: ButtonProps['Icon'], variant: ButtonProps['variant'], isPending: boolean) => {
  if (Icon == null || variant == null) {
    return null
  }

  return (
    <div className='pressable__icon' role='presentation'>
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
    {(values) => variant == null
      ? renderButtonChildren(children, values)
      : <>
          {renderButtonIcon(Icon, variant, values.isPending)}

          {children != null && (
            <div className='pressable__content'>
              {renderButtonChildren(children, values)}
            </div>
          )}
        </>
    }
  </ReactAriaButton>
)
