import type { FC } from 'react'
import { Switch as ReactAriaSwitch, type SwitchProps as ReactAriaSwitchProps } from 'react-aria-components'

import { mergeReactAriaClassNames, renderReactAriaChildren } from '@/presentation/utils'

import './Switch.styles.sass'

export type SwitchProps = ReactAriaSwitchProps & {
  /** Switch side */
  switchSide?: 'left' | 'right'
}

export const Switch: FC<SwitchProps> = ({ children, className, switchSide, ...switchProps }) => (
  <ReactAriaSwitch
    {...switchProps}
    className={values => mergeReactAriaClassNames(values, className, 'switch', switchSide)}
  >
    {values => (
      <>
        <div aria-hidden className='switch__indicator' />

        {renderReactAriaChildren(children, values)}
      </>
    )}
  </ReactAriaSwitch>
)
