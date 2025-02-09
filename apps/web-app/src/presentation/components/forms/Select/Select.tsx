import { ChevronDownIcon } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Popover, Select as ReactAriaSelect, type SelectProps as ReactAriaSelectProps, SelectValue } from 'react-aria-components'

import { Button, Label, ListBox, type ListItem, Option, type OptionProps } from '@/presentation/components'
import type { Key, Style } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './Select.styles.sass'

export type PickerItem <K extends Key = Key, O = object> = ListItem<K, O & OptionProps>
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

export function Select <K extends Key, O> ({
  className,
  items,
  label,
  onSelectionChange,
  selectedKey,
  ...selectProps
}: SelectProps<K, O>) {
  const [currentSelectedKey, setCurrentSelectedKey] = useState<K | null | undefined>(selectedKey)
  const [selectWidth, setSelectWidth] = useState<number | null>(null)

  const selectRef = useRef<HTMLDivElement>(null)

  const updateSelectSize = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
    setSelectWidth(ref.current?.offsetWidth ?? null)
  }, [])

  useEffect(() => {
    if (selectRef.current) {
      updateSelectSize(selectRef)
    }
  }, [currentSelectedKey, selectRef, updateSelectSize])

  const onSelectSelectionChange = (key: Key) => {
    if (!items) {
      return
    }

    for (const item of items) {
      if (item.id === key) {
        setCurrentSelectedKey(item.id)

        if (onSelectionChange) {
          onSelectionChange(item)
          return
        }
      }
    }
  }

  const selectStyleVariables: Style = {
    '--select-width': selectWidth ? `${selectWidth}px` : '100%'
  }

  return (
    <ReactAriaSelect
      {...selectProps}
      className={values => mergeReactAriaClassNames(values, className, 'select')}
      onSelectionChange={onSelectSelectionChange}
      ref={selectRef}
      selectedKey={selectedKey}
    >
      <Label className='select__label'>{label}</Label>

      <Button className='select__trigger'>
        <SelectValue className='select__trigger__value'>
          {({ selectedText }) => selectedText}
        </SelectValue>

        <ChevronDownIcon className='select__trigger__icon' />
      </Button>

      <Popover className='select__popover'>
        <ListBox
          className='select__list'
          itemClassName='select__list__item'
          items={items}
          style={selectStyleVariables}
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
