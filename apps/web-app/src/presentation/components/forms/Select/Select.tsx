import { ChevronDownIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Popover, Select as ReactAriaSelect, type SelectProps as ReactAriaSelectProps, SelectValue } from 'react-aria-components'

import { Button, Label, List, type ListItem, Option, type OptionProps } from '@/presentation/components'
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
  placeholder,
  selectedKey,
  ...selectProps
}: SelectProps<K, O>) {
  const [currentSelectedKey, setCurrentSelectedKey] = useState<K | null | undefined>(selectedKey)
  const [selectWidth, setSelectWidth] = useState<number | null>(null)

  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectRef.current) {
      setSelectWidth(selectRef.current?.offsetWidth ?? null)
    }
  }, [currentSelectedKey, selectRef])

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
      placeholder={placeholder}
      ref={selectRef}
      selectedKey={selectedKey}
    >
      {({ isRequired }) => (
        <>
          <Label className='select__label' isRequired={isRequired}>
            {label}
          </Label>

          <Button className='select__trigger'>
            <SelectValue<PickerItem> className='select__trigger__value'>
              {({ selectedItem }) => {
                if (!selectedItem) {
                  return (
                    <div className='select__trigger__value__text'>
                      {placeholder}
                    </div>
                  )
                }

                return (
                  <>
                    {selectedItem.Icon && (
                      <div className='select__trigger__value__icon'>
                        {selectedItem.Icon}
                      </div>
                    )}

                    <div className='select__trigger__value__text'>
                      {selectedItem.textValue}
                    </div>
                  </>
                )
              }}
            </SelectValue>

            <ChevronDownIcon className='select__trigger__icon' />
          </Button>

          <Popover className='select__popover'>
            <List
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
            </List>
          </Popover>
        </>
      )}
    </ReactAriaSelect>
  )
}
