import { CheckIcon } from 'lucide-react'
import type { FC } from 'react'
import { Checkbox as ReactAriaCheckbox, type CheckboxProps as ReactAriaCheckboxProps } from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './Checkbox.styles.sass'

export type CheckboxProps = ReactAriaCheckboxProps & {
  checkboxSide?: 'left' | 'right'
}

export const Checkbox: FC<CheckboxProps> = ({ className, children, checkboxSide = 'left', ...checkboxProps }) => {
  return (
    <ReactAriaCheckbox
      className={values => mergeReactAriaClassNames(values, className, 'checkbox', checkboxSide)}
      {...checkboxProps}
    >
      {(values) => (
        <>
          <div className='checkbox__icon'>
            {values.isSelected && <CheckIcon />}
          </div>

          {typeof children === 'function'
            ? children(values)
            : children
          }
        </>
      )}
    </ReactAriaCheckbox>
  )
}
