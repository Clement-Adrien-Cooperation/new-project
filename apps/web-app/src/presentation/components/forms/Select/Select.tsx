import { ChevronDownIcon } from 'lucide-react'
import { Popover, Select as ReactAriaSelect, type SelectProps as ReactAriaSelectProps, SelectValue } from 'react-aria-components'

import { Button, Label, ListBox, ListBoxItem, type ListBoxItemProps, Option, type OptionProps } from '@/presentation/components'
import type { Key } from '@/presentation/types'

import './Select.styles.sass'

export type PickerItem <K extends Key = Key, O = object> = ListBoxItemProps<K, O & OptionProps>
export type PickerItems <K extends Key = Key, O = object> = Iterable<PickerItem<K, O>>

type OmittedSelectProps = 'defaultSelectedKey' | 'items' | 'onSelectionChange' | 'selectedKey'
type FilteredSelectProps <K extends Key, O> = Omit<ReactAriaSelectProps<PickerItem<K, O>>, OmittedSelectProps>

type SelectProps <K extends Key, O> = FilteredSelectProps<K, O> & {
  /** The key of the default selected item. */
  defaultSelectedKey?: K

  /** The list of items to render. */
  items?: PickerItems<K, O>

  /** The label of the select */
  label?: string

  /** The function to call when the selection changes. */
  onSelectionChange?: (item: PickerItem<K, O>) => void

  /** The key of the selected item. */
  selectedKey?: K | null
}

export function Select <K extends Key, O> ({ items, label, onSelectionChange, ...selectProps }: SelectProps<K, O>) {
  const onSelectSelectionChange = (key: Key) => {
    if (!items || !onSelectionChange) {
      return
    }

    for (const item of items) {
      if (item.id === key) {
        onSelectionChange(item)
        return
      }
    }
  }

  return (
    <ReactAriaSelect {...selectProps} onSelectionChange={onSelectSelectionChange}>
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
          items={items}
        >
          {item => (
            <ListBoxItem {...item} className='select__popover__list__item'>
              {values => (
                <Option
                  isDisabled={values.isDisabled}
                  isSelected={values.isSelected}
                  Icon={item.Icon}
                  textValue={item.textValue}
                />
              )}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ReactAriaSelect>
  )
}
