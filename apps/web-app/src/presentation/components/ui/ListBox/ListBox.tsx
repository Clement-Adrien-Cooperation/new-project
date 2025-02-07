import { ListBox as ReactAriaListBox, type ListBoxProps as ReactAriaListBoxProps } from 'react-aria-components'

import type { ListBoxItemProps } from '@/presentation/components'
import type { Key } from '@/presentation/types'

export type ListItem <K extends Key, O = object>  = ListBoxItemProps<K, O>
export type ListItems <K extends Key, O = object>  = Iterable<ListItem<K, O>>

type ListBoxOverrideProps <K extends Key, O> = {
  /** Callback with item in parameters when user click on an item */
  onAction?: (item: ListItem<K, O>) => void
}

type ListBoxProps <K extends Key, O>
  = Omit<ReactAriaListBoxProps<ListItem<K, O>>, 'onAction'>
  & ListBoxOverrideProps<K, O>

// Component to render a list of items
export function ListBox <K extends Key, O> ({
  items,
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
      onAction={onAction && onListBoxAction}
    />
  )
}
