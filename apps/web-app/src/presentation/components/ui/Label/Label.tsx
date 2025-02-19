import { mergeClassNames } from '@/presentation/utils'
import type { FC } from 'react'
import { Label as ReactAriaLabel, type LabelProps as ReactAriaLabelProps } from 'react-aria-components'

import './Label.styles.sass'

type LabelProps = ReactAriaLabelProps & {
  isRequired?: boolean
}

export const Label: FC<LabelProps> = ({ children, className, isRequired, ...labelProps }) => {
  if (children == null) {
    return null
  }

  return (
    <ReactAriaLabel className={mergeClassNames('label', className)} {...labelProps}>
      {children}
      {isRequired && <span aria-hidden> *</span>}
    </ReactAriaLabel>
  )
}
