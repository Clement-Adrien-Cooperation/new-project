import {
  ListBoxItem as ReactAriaListBoxItem,
  type ListBoxItemProps as ReactAriaListBoxItemProps
} from 'react-aria-components'

import { Separator } from '@/presentation/components'
import type { Key, ListItemObject } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './ListBoxItem.styles.sass'

export type ListBoxItemProps <K extends Key = Key, O = object> = ListItemObject<K, ReactAriaListBoxItemProps & O>

export function ListBoxItem <K extends Key, O> ({
  className,
  hasSeparatorBefore = false,
  ...listBoxItemPros
}: ListBoxItemProps<K, O>) {
  return (
    <>
      {hasSeparatorBefore && <Separator />}

      <ReactAriaListBoxItem
        {...listBoxItemPros}
        className={(values) => mergeReactAriaClassNames(values, className, 'list-box-item')}
      />
    </>
  )
}
