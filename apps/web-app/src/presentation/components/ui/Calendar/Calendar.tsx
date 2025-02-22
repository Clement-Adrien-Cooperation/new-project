import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import {
  CalendarCell,
  type CalendarCellRenderProps,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  type DateValue,
  Heading,
  Calendar as ReactAriaCalendar,
  type CalendarProps as ReactAriaCalendarProps
} from 'react-aria-components'

import { Button } from '@/presentation/components'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './Calendar.styles.sass'

export type DateCellRenderProps = CalendarCellRenderProps

type CalendarProps <T extends DateValue> = ReactAriaCalendarProps<T> & {
  renderDateCell?: (date: DateCellRenderProps) => ReactNode
}

export function Calendar <T extends DateValue> ({
  className,
  renderDateCell,
  ...calendarProps
}: CalendarProps<T>) {
  return (
    <ReactAriaCalendar
      className={values => mergeReactAriaClassNames(values, className, 'calendar')}
      {...calendarProps}
    >
      <header className='calendar__header'>
        <Button
          Icon={<ChevronLeftIcon />}
          size='small'
          slot='previous'
          variant='transparent'
        />

        <Heading className='calendar__header__heading' />

        <Button
          Icon={<ChevronRightIcon />}
          size='small'
          slot='next'
          variant='transparent'
        />
      </header>

      <div role='separator' className='calendar__separator' />

      <CalendarGrid className='calendar__grid'>
        <CalendarGridHeader>
          {day => (
            <CalendarHeaderCell className='calendar__grid__header-cell'>
              {day}
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>

        <CalendarGridBody>
          {date => (
            <CalendarCell className='calendar__grid__cell' date={date}>
              {values => renderDateCell
                ? renderDateCell(values)
                : values.formattedDate
              }
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </ReactAriaCalendar>
  )
}
