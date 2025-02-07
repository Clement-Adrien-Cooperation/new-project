import type { ReactNode } from 'react'
import { type ListBoxItemRenderProps, ListBox as ReactAriaListBox, type ListBoxProps as ReactAriaListBoxProps } from 'react-aria-components'

import { ListBoxItem, type ListBoxItemProps, Option } from '@/presentation/components'
import type { Key } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

type ListBoxOverrideProps <K extends Key, O> = {
  /** The list of items to render. */
  children?: ReactNode | ((item: O & ListBoxItemRenderProps) => ReactNode)

  /** Additional className provided to all items */
  itemClassName?: string

  /** Callback with item in parameters when user click on an item */
  onAction?: (item: ListBoxItemProps<K, O>) => void
}

type ListBoxProps <K extends Key, O>
  = Omit<ReactAriaListBoxProps<ListBoxItemProps<K, O>>, 'children' | 'onAction'>
  & ListBoxOverrideProps<K, O>

export type ListBoxItems <K extends Key = string, O = object> = ListBoxProps<K, O>['items']

// Component to render a list of items
export function ListBox <K extends Key, O> ({
  children,
  itemClassName,
  items,
  onAction,
  ...listBoxProps
}: ListBoxProps<K, O>) {
  const itemsArray = Array.from(items ?? [])

  const onListBoxAction = (key: Key) => {
    if (!onAction) {
      return
    }

    const matchingItem = itemsArray.find(item => item.id === key)

    if (matchingItem) {
      onAction(matchingItem)
    }
  }

  return (
    <ReactAriaListBox
      {...listBoxProps}
      items={items}
      onAction={onAction && onListBoxAction}
    >
      {typeof children !== 'function' && children != null
        ? children
        : (item) => (
            <ListBoxItem
              {...item}
              className={(values) => mergeReactAriaClassNames(values, item.className, itemClassName)}
              key={item.id}
            >
              {(values) => {
                if (children) {
                  return children({ ...item, ...values, defaultChildren: item.textValue })
                }

                return (
                  <Option
                    isDisabled={values.isDisabled}
                    isSelected={values.isSelected}
                    textValue={item.textValue}
                  />
                )
              }}
            </ListBoxItem>
          )
      }
    </ReactAriaListBox>
  )
}
