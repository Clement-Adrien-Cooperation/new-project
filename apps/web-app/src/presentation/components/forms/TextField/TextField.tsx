import type { FC, ReactElement } from 'react'
import { Input, TextField as ReactAreaTextField, type TextFieldProps as ReactAriaTextFieldProps } from 'react-aria-components'

import { FieldError, Label, Text } from '@/presentation/components'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './TextField.styles.sass'

export type TextFieldProps = ReactAriaTextFieldProps & {
  /** The description of the text field. */
  description?: string

  /** The label of the text field. */
  label?: string

  /** The icon to display on the left side of the text field. */
  LeftIcon?: ReactElement

  /** The placeholder of the text field. */
  placeholder?: string

  /** The content to display on the right side of the text field. */
  RightContent?: ReactElement
}

export const TextField: FC<TextFieldProps> = ({
  className,
  description,
  label,
  LeftIcon,
  placeholder,
  RightContent,
  ...textFieldProps
}) => (
  <ReactAreaTextField
    className={values => mergeReactAriaClassNames(values, className, 'text-field')}
    {...textFieldProps}
  >
    {({ isInvalid, isRequired }) => (
      <>
        <Label className='text-field__label' isRequired={isRequired}>
          {label}
        </Label>

        <div className='text-field__wrapper'>
          {LeftIcon && (
            <div className='text-field__wrapper__left-icon'>
              {LeftIcon}
            </div>
          )}

          <Input
            className='text-field__wrapper__input'
            placeholder={placeholder}
          />

          {RightContent && (
            <div className='text-field__wrapper__right-content'>
              {RightContent}
            </div>
          )}
        </div>

        {isInvalid
          ? <FieldError className='text-field__error' />
          : <Text className='text-field__description' slot='description'>
              {description}
            </Text>
        }
      </>
    )}
  </ReactAreaTextField>
)
