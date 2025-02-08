import type { FC } from 'react'
import { Text as ReactAriaText, type TextProps as ReactAriaTextProps } from 'react-aria-components'

export const Text: FC<ReactAriaTextProps> = ({ children, ...textProps }) => {
  if (children == null) {
    return null
  }

  return (
    <ReactAriaText {...textProps}>
      {children}
    </ReactAriaText>
  )
}
