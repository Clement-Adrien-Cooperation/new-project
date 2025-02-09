import type { ReactNode } from 'react'
import { type ListBoxItemRenderProps, ListBox as ReactAriaListBox, type ListBoxProps as ReactAriaListBoxProps } from 'react-aria-components'

import { ListBoxItem, type ListBoxItemProps, Option, Separator } from '@/presentation/components'
import type { CommonItem, Key } from '@/presentation/types'
import { mergeClassNames, mergeReactAriaClassNames } from '@/presentation/utils'

export type ListItem <K extends Key = Key, O = object> = CommonItem<K, O & ListBoxItemProps>
export type ListItems <K extends Key = Key, O = object> = Iterable<ListItem<K, O>>

type ListBoxChildrenRenderProps <K extends Key, O>
  = Omit<ListItem<K, O>, 'hasSeparatorBefore'>
  & ListBoxItemRenderProps

type ListBoxOverrideProps <K extends Key, O> = {
  /** The list of items to render. */
  children?: ReactNode | ((item: ListBoxChildrenRenderProps<K, O>) => ReactNode)

  /** Additional className for each item */
  itemClassName?: ListBoxItemProps['className']

  /** Callback with item in parameters when user click on an item */
  onAction?: (item: ListItem<K, O>) => void
}

type ListBoxProps <K extends Key, O>
  = Omit<ReactAriaListBoxProps<ListItem<K, O>>, 'children' | 'onAction'>
  & ListBoxOverrideProps<K, O>

// Component to render a list of items
export function ListBox <K extends Key, O> ({
  children,
  itemClassName,
  items,
  layout = 'grid',
  onAction,
  ...listBoxProps
}: ListBoxProps<K, O>) {
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
    <ReactAriaListBox
      {...listBoxProps}
      items={items}
      layout={layout}
      onAction={onAction && onListBoxAction}
    >
      {typeof children === 'function' || children == null
        ? ({ hasSeparatorBefore, ...item }) => (
            <>
              {hasSeparatorBefore && <Separator />}

              <ListBoxItem
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
                      isDisabled={values.isDisabled}
                      isSelected={values.isSelected}
                      Icon={item.Icon}
                      textValue={item.textValue}
                    />
                }
              </ListBoxItem>
            </>
          )
        : children
      }
    </ReactAriaListBox>
  )
}
