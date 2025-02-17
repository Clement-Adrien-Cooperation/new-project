import { CalendarIcon, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import {
  DateInput,
  DateSegment,
  type DateValue,
  Dialog,
  Group,
  Popover,
  DatePicker as ReactAriaDatePicker,
  type DatePickerProps as ReactAriaDatePickerProps
} from 'react-aria-components'

import { Button, Calendar, Label } from '@/presentation/components'
import type { Style } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './DatePicker.styles.sass'

type DatePickerProps <T extends DateValue> = ReactAriaDatePickerProps<T> & {
  /** The label of the date picker. */
  label?: string
}

export function DatePicker <T extends DateValue> ({
  className,
  label,
  ...datePickerProps
}: DatePickerProps<T> ) {
  const [datePickerWidth, setDatePickerWidth] = useState<number | null>(null)

  const datePickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (datePickerRef.current) {
      setDatePickerWidth(datePickerRef.current?.offsetWidth ?? null)
    }
  }, [datePickerRef])

  const datePickerStyleVariables: Style = {
    '--date-picker-width': datePickerWidth ? `${datePickerWidth}px` : '100%'
  }

  return (
    <ReactAriaDatePicker
      className={values => mergeReactAriaClassNames(values, className, 'date-picker')}
      {...datePickerProps}
    >
      <Label>{label}</Label>

      <Group className='date-picker__group' ref={datePickerRef}>
        <CalendarIcon className='date-picker__group__icon' />

        <DateInput className='date-picker__group__date-input'>
          {segment => (
            <DateSegment
              className='date-picker__group__date-input__segment'
              segment={segment}
            />
          )}
        </DateInput>

        <Button className='date-picker__group__trigger-button'>
          <ChevronDown />
        </Button>
      </Group>

      <Popover>
        <Dialog className='date-picker__dialog' style={datePickerStyleVariables}>
          <Calendar className='date-picker__calendar' />
        </Dialog>
      </Popover>
    </ReactAriaDatePicker>
  )
}
