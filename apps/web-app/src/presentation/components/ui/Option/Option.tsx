import { CheckIcon } from 'lucide-react'
import type { ComponentProps, FC, ReactNode } from 'react'

import { Text } from '@/presentation/components'
import { mergeClassNames } from '@/presentation/utils'

import './Option.styles.sass'

export type OptionProps = {
  /** Whether the option is disabled. */
  isDisabled?: boolean

  /** Whether the option is selected. */
  isSelected?: boolean

  /** Icon to display on the left. */
  Icon?: ReactNode

  /** The option label. */
  textValue: string
}

export const Option: FC<ComponentProps<'div'> & OptionProps> = ({
  className,
  isDisabled,
  isSelected,
  Icon,
  textValue,
  ...optionProps
}) => (
  <div
    {...optionProps}
    className={mergeClassNames(
      'option',
      isDisabled && 'disabled',
      className
    )}
  >
    <div className='option__content' role='presentation'>
      {Icon && (
        <div className='option__icon'>
          {Icon}
        </div>
      )}

      <Text className='option__content__label' slot='label'>
        {textValue}
      </Text>
    </div>

    {isSelected && (
      <div className='option__icon' role='presentation'>
        <CheckIcon />
      </div>
    )}
  </div>
)
