import { ChevronDownIcon } from 'lucide-react'
import { Popover, Select as ReactAriaSelect, type SelectProps as ReactAriaSelectProps, SelectValue } from 'react-aria-components'

import { Button, Label, ListBox, type ListBoxItemProps, type ListBoxItems, Option, type OptionProps } from '@/presentation/components'
import type { Key } from '@/presentation/types'

import './Select.styles.sass'

export type PickerItem <K extends Key = Key, O = object> = ListBoxItemProps<K, O & OptionProps>
export type PickerItems <K extends Key = Key, O = object> = ListBoxItems<K, O & OptionProps>

type SelectProps <K extends Key, O> = ReactAriaSelectProps<PickerItem<K, O>> & {
  /** The list of items to render. */
  items: PickerItems<K, O>

  /** The label of the select */
  label?: string
}

export function Select <K extends Key, O> ({ items, label, ...selectProps }: SelectProps<K, O>) {
  return (
    <ReactAriaSelect {...selectProps}>
      <Label className='select__label'>{label}</Label>

      <Button className='select__trigger'>
        <SelectValue className='select__trigger__value'>
          {({ selectedText }) => selectedText}
        </SelectValue>

        <ChevronDownIcon className='select__trigger__icon' />
      </Button>

      <Popover className='select__popover'>
        <ListBox
          className='select__popover__list'
          itemClassName='select__popover__list__item'
          items={items}
        >
          {item => (
            <Option
              isDisabled={item.isDisabled}
              isSelected={item.isSelected}
              Icon={item.Icon}
              textValue={item.textValue}
            />
          )}
        </ListBox>
      </Popover>
    </ReactAriaSelect>
  )
}
