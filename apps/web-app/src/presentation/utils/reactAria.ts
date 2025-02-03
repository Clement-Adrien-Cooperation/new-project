import type { ButtonRenderProps, LinkRenderProps } from 'react-aria-components'

import { type ClassNames, mergeClassNames } from './classNames'

export type ElementRenderProps
  = ButtonRenderProps
  | LinkRenderProps

export type RenderPropsValues <T extends ElementRenderProps> = T & {
  defaultClassName: string | undefined
}

export type ReactAriaClassName <T extends ElementRenderProps>
  = string
  | ((values: RenderPropsValues<T>) => string)
  | undefined

export const mergeReactAriaClassNames = <T extends ElementRenderProps> (
  values: RenderPropsValues<T>,
  className: ReactAriaClassName<T>,
  ...baseClassName: ClassNames[]
) => {
  const classNameOverride = typeof className === 'function'
    ? className(values)
    : className

  return mergeClassNames(...baseClassName, classNameOverride)
}
