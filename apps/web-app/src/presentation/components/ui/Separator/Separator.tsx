import React from 'react'
import { Separator as ReactAriaSeparator, type SeparatorProps } from 'react-aria-components'

import { mergeClassNames } from '@/presentation/utils'

import './Separator.styles.sass'

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = 'horizontal',
  ...separatorProps
}) => (
  <ReactAriaSeparator
    {...separatorProps}
    className={mergeClassNames('separator', orientation, className)}
    orientation={orientation}
  />
)
