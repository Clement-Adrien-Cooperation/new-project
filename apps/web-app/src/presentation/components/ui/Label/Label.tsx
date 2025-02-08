import type { FC } from 'react'
import { type LabelProps, Label as ReactAriaLabel } from 'react-aria-components'

export const Label: FC<LabelProps> = ({ children, ...labelProps }) => {
  if (children == null) {
    return null
  }

  return (
    <ReactAriaLabel {...labelProps}>
      {children}
    </ReactAriaLabel>
  )
}
