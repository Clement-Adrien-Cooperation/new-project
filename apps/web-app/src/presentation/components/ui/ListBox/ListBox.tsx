import type { ReactNode } from 'react'
import { type ListBoxItemRenderProps, ListBox as ReactAriaListBox, type ListBoxProps as ReactAriaListBoxProps } from 'react-aria-components'

import { ListBoxItem, type ListBoxItemProps } from '@/presentation/components'
import type { Key } from '@/presentation/types'
import { mergeClassNames, mergeReactAriaClassNames } from '@/presentation/utils'
import { Option } from '@/presentation/components'

type ListBoxChildrenRenderProps <K extends Key, O>
  = ListBoxItemProps<K, O>
  & ListBoxItemRenderProps
  & { defaultChildren: ReactNode | undefined }

// Override onAction function to return all the item props
type ListBoxProps <K extends Key, O>
  = Omit<ReactAriaListBoxProps<ListBoxItemProps<K, O>>, 'children' | 'onAction' >
  & {
    /** The list of items to render. */
    children?: ReactNode | ((item: ListBoxChildrenRenderProps<K, O>) => ReactNode)

    /** Additional className provided to all items */
    itemClassName?: ListBoxItemProps<K, O>['className']

    /** Callback with item in parameters when user click on an item */
    onAction?: (item: ListBoxItemProps<K, O>) => void
  }

export type ListBoxItems <K extends Key = string, O = object> = ListBoxProps<K, O>['items']

// Component to render a list of items
export function ListBox <K extends Key, O> ({
  children,
  itemClassName,
  items,
  onAction,
  ...props
}: ListBoxProps<K, O>) {
  const itemsArray = Array.from(items ?? [])

  const onListBoxAction = (key: Key) => {
    if (!onAction) {
      return
    }

    const item = itemsArray.find((item) => item.id === key)

    if (item) {
      onAction(item)
    }
  }

  return (
    <ReactAriaListBox
      {...props}
      items={items}
      onAction={onAction && onListBoxAction}
    >
      {typeof children !== 'function' && children != null
        ? children
        : (item) => (
            <ListBoxItem
              {...item}
              className={(values) => {
                const itemClassNames = [
                  mergeReactAriaClassNames(values, itemClassName),
                  mergeReactAriaClassNames(values, item.className)
                ]
                return mergeClassNames(...itemClassNames)
              }}
              key={item.id}
            >
              {(values) => {
                if (children) {
                  return children({ ...item, ...values, defaultChildren: item.label })
                }

                return (
                  <Option
                    label={item.label}
                    isSelected={values.isSelected}
                    isDisabled={values.isDisabled}
                  />
                )
              }}
            </ListBoxItem>
          )
      }
    </ReactAriaListBox>
  )
}
