import { ChevronDownIcon } from 'lucide-react'
import { Popover, Select as ReactAriaSelect, type SelectProps as ReactAriaSelectProps, SelectValue } from 'react-aria-components'

import { Button, Label, ListBox, type ListBoxItemProps, type ListBoxItems, Option, type OptionProps } from '@/presentation/components'
import type { Key } from '@/presentation/types'

import './Select.styles.sass'

export type PickerItem <K extends Key = Key, O = object> = ListBoxItemProps<K, O & OptionProps>
export type PickerItems <K extends Key = Key, O = object> = ListBoxItems<K, O & OptionProps>

type FilteredSelectProps<K extends Key, O> = Omit<ReactAriaSelectProps<PickerItem<K, O>>, 'onSelectionChange' | 'selectedKey'>

type SelectProps <K extends Key, O> = FilteredSelectProps<K, O> & {
  /** The list of items to render. */
  items: PickerItems<K, O>

  /** The label of the select */
  label?: string
}

export function Select <K extends Key, O> ({ items, label, ...selectProps }: SelectProps<K, O>) {
  return (
    <ReactAriaSelect {...selectProps}>
      <Label>{label}</Label>

      <Button className='select__trigger'>
        <SelectValue<PickerItem<K, O>>>
          {(values) => values.selectedItem?.textValue ?? selectProps.placeholder}
        </SelectValue>

        <ChevronDownIcon />
      </Button>

      <Popover>
        <ListBox items={items}>
          {item => (
            <Option
              description={item.description}
              isDisabled={item.isDisabled}
              isSelected={item.isSelected}
              LeftIcon={item.LeftIcon}
              RightIcon={item.RightIcon}
              textValue={item.textValue}
            />
          )}
        </ListBox>
      </Popover>
    </ReactAriaSelect>
  )
}
