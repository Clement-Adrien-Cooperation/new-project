import type { FC } from 'react'
import { Input, TextField as ReactAreaTextField, type TextFieldProps as ReactAriaTextFieldProps } from 'react-aria-components'

import { FieldError, Label, Text } from '@/presentation/components'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './TextField.styles.sass'

type TextFieldProps = ReactAriaTextFieldProps & {
  /** The description of the text field. */
  description?: string

  /** The label of the text field. */
  label?: string

  /** The placeholder of the text field. */
  placeholder?: string
}

export const TextField: FC<TextFieldProps> = ({
  className,
  description,
  label,
  placeholder,
  ...textFieldProps
}) => (
  <ReactAreaTextField
    className={values => mergeReactAriaClassNames(values, className, 'text-field')}
    {...textFieldProps}
  >
    {({ isInvalid, isRequired }) => (
      <>
        <Label isRequired={isRequired}>
          {label}
        </Label>

        <Input
          className='text-field__input'
          placeholder={placeholder}
        />

        {isInvalid
          ? <FieldError />
          : <Text className='text-field__description' slot='description'>
              {description}
            </Text>
        }
      </>
    )}
  </ReactAreaTextField>
)
