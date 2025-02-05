import {
  ListBoxItem as ReactAriaListBoxItem,
  type ListBoxItemProps as ReactAriaListBoxItemProps
} from 'react-aria-components'

import { Separator } from '@/presentation/components'
import type { Key, ListItem } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

export type ListBoxItemProps <K extends Key = Key, O = object> = ListItem<K, ReactAriaListBoxItemProps & O>

export function ListBoxItem <K extends Key, O> ({
  className,
  hasSeparatorBefore = false,
  label,
  textValue,
  ...listBoxItemPros
}: ListBoxItemProps<K, O>) {
  return (
    <>
      {hasSeparatorBefore && <Separator />}

      <ReactAriaListBoxItem
        {...listBoxItemPros}
        className={(values) => mergeReactAriaClassNames(values, className, 'list-box-item')}
        textValue={textValue ?? label}
      />
    </>
  )
}
