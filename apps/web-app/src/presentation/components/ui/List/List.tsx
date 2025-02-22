import type { ReactNode } from 'react'
import { ListBox, type ListBoxItemRenderProps, type ListBoxProps } from 'react-aria-components'

import { ListElem, type ListElemProps, Option } from '@/presentation/components'
import type { Item, Key } from '@/presentation/types'
import { mergeClassNames, mergeReactAriaClassNames } from '@/presentation/utils'

export type ListItem <K extends Key = Key, O extends object = object> = Item<K, ListElemProps<O>>
export type ListItems <K extends Key = Key, O extends object = object> = Iterable<ListItem<K, O>>

type ListBoxChildrenRenderProps <K extends Key, O extends object = object> = ListItem<K, O> & ListBoxItemRenderProps

type ListBoxOverrideProps <K extends Key, O extends object> = {
  /** The list of items to render. */
  children?: ReactNode | ((item: ListBoxChildrenRenderProps<K, O>) => ReactNode)

  /** Additional className for each item */
  itemClassName?: ListElemProps<O>['className']

  /** Callback with item in parameters when user press an item */
  onAction?: (item: ListItem<K, O>) => void
}

type ListProps <K extends Key, O extends object>
  = Omit<ListBoxProps<ListItem<K, O>>, keyof ListBoxOverrideProps<K, O>>
  & ListBoxOverrideProps<K, O>

// Component to render a list of items
export function List <K extends Key, O extends object> ({
  children,
  itemClassName,
  items,
  layout = 'grid',
  onAction,
  ...listProps
}: ListProps<K, O>) {
  const onListBoxAction = (key: Key) => {
    if (!items || !onAction) {
      return
    }

    for (const item of items) {
      if (item.id === key) {
        onAction(item)
        return
      }
    }
  }

  return (
    <ListBox
      {...listProps}
      items={items}
      layout={layout}
      onAction={onAction && onListBoxAction}
    >
      {typeof children === 'function' || children == null
        ? (item) => item.isVisible !== false && (
            <ListElem
              {...item}
              className={values => {
                const classNames = [
                  mergeReactAriaClassNames(values, itemClassName),
                  mergeReactAriaClassNames(values, item.className)
                ]
                return mergeClassNames(classNames)
              }}
            >
              {values => children
                ? children({ ...item, ...values })
                : <Option
                    Icon={item.Icon}
                    isDisabled={values.isDisabled}
                    isSelected={values.isSelected}
                    textValue={item.textValue}
                  />
              }
            </ListElem>
          )
        : children
      }
    </ListBox>
  )
}
