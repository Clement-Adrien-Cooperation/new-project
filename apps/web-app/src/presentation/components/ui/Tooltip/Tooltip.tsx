import type { FC, ReactElement } from 'react'
import { Tooltip as ReactAriaTooltip, type TooltipProps as ReactAriaTooltipProps, TooltipTrigger } from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './Tooltip.styles.sass'

export type TooltipProps = ReactAriaTooltipProps & {
  delay?: number
  Trigger: ReactElement
}

export const Tooltip: FC<TooltipProps> = ({ className, delay = 500, Trigger, ...tooltipProps }) => (
  <TooltipTrigger delay={delay}>
    {Trigger}

    <ReactAriaTooltip
      className={(values) => mergeReactAriaClassNames(values, className, 'tooltip')}
      offset={8}
      {...tooltipProps}
    />
  </TooltipTrigger>
)
