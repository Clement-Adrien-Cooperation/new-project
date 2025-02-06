import { CheckIcon } from 'lucide-react'
import type { ComponentProps, FC, ReactNode } from 'react'

import { Text } from '@/presentation/components'
import { mergeClassNames } from '@/presentation/utils'

import './Option.styles.sass'

export type OptionProps = ComponentProps<'div'> & {
  /** The option description. */
  description?: string

  /** Whether the option is disabled. */
  isDisabled?: boolean

  /** Whether the option is selected. */
  isSelected?: boolean

  /** Icon to display on the left. */
  LeftIcon?: ReactNode

  /** Icon to display on the right */
  RightIcon?: ReactNode

  /** The option label. */
  textValue: string
}

const renderRightIcon = (RightIcon: ReactNode, isSelected?: boolean) => {
  if (RightIcon == null && !isSelected) {
    return null
  }

  return (
    <div className='option__box__icon'>
      {RightIcon ?? <CheckIcon />}
    </div>
  )
}

export const Option: FC<OptionProps> = ({
  className,
  description,
  isDisabled,
  isSelected,
  LeftIcon,
  RightIcon,
  textValue,
  ...optionProps
}) => (
  <div
    {...optionProps}
    className={mergeClassNames(
      'option',
      isDisabled && 'disabled',
      isSelected && 'selected',
      className
    )}
  >
    <div className='option__box'>
      {LeftIcon && (
        <div className='option__box__icon'>
          {LeftIcon}
        </div>
      )}

      <div className='option__box__content'>
        <Text className='option__box__content__label' slot='label'>
          {textValue}
        </Text>

        <Text className='option__box__content__description' slot='description'>
          {description}
        </Text>
      </div>
    </div>

    {renderRightIcon(RightIcon, isSelected)}
  </div>
)
