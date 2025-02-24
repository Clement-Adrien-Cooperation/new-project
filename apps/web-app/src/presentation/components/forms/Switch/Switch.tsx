import type { FC } from 'react'
import { Switch as ReactAriaSwitch, type SwitchProps as ReactAriaSwitchProps } from 'react-aria-components'

import { mergeReactAriaClassNames, renderReactAriaChildren } from '@/presentation/utils'

import './Switch.styles.sass'

export type SwitchProps = ReactAriaSwitchProps

export const Switch: FC<ReactAriaSwitchProps> = ({ children, className, ...switchProps }) => {
  return (
    <ReactAriaSwitch
      {...switchProps}
      className={values => mergeReactAriaClassNames(values, className, 'switch')}
    >
      {values => (
        <>
          <div aria-hidden className='switch__indicator' />

          {renderReactAriaChildren(children, values)}
        </>
      )}
    </ReactAriaSwitch>
  )
}
