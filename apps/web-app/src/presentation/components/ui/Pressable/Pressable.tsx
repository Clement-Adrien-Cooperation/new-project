import type { ReactNode } from 'react'
import type { ButtonRenderProps } from 'react-aria-components'

import { mergeReactAriaClassNames, type RenderPropsValues } from '../../../utils'

import './Pressable.styles.sass'

export type PressableIconSide = 'left' | 'right'

export type PressableSize = 'small'

export type PressableVariant
  = 'filled'
  | 'outlined'
  | 'tonal'
  | 'transparent'
  | 'underlined'

type PressableWithVariantProps = {
  /** Optional icon to display within the button. */
  Icon?: ReactNode

  /**
   * Determines the side of the button the icon should appear on. Defaults to 'left'.
   * @values 'left', 'right'
   * @default 'left'
   */
  iconSide?: PressableIconSide

  /**
   * Defines the size of the button. Can be 'default' or 'icon' for a button with only an icon.
   * @values 'small', undefined
   */
  size?: PressableSize

  /**
   * The visual style variant of the button.
   * @values 'primary', 'secondary', 'outline', 'ghost', 'destructive'
   * @default 'outline'
   */
  variant: PressableVariant
}

type PressableWithoutVariantProps = {
  Icon?: undefined
  iconSide?: undefined
  size?: undefined
  variant?: undefined
}

export type PressableProps = PressableWithVariantProps | PressableWithoutVariantProps

type PressableRenderProps
  = ButtonRenderProps

type PressableChildren <T extends PressableRenderProps>
  = React.ReactNode
  | ((values: T & { defaultChildren: React.ReactNode | undefined }) => React.ReactNode)

export function mergeReactAriaPressableClassNames <T extends PressableRenderProps> (
  values: RenderPropsValues<T>,
  className: string | ((values: RenderPropsValues<T>) => string) | undefined,
  variant: PressableProps['variant'],
  Icon: PressableProps['Icon'],
  iconSide: PressableProps['iconSide'] = 'left',
  size: PressableProps['size'],
  children?: PressableChildren<T>
) {
  const hasIcon = !!Icon
  const isIconButton = hasIcon && children == null
  const currentVariant: PressableProps['variant'] = variant == null && isIconButton ? 'transparent' : variant

  return mergeReactAriaClassNames(
    values,
    className,
    'pressable',
    currentVariant,
    hasIcon && !isIconButton && `icon-${iconSide}`,
    isIconButton && 'icon-size',
    size
  )
}
