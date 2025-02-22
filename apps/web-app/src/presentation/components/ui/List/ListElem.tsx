import { ListBoxItem, type ListBoxItemProps } from 'react-aria-components'

import { Separator } from '@/presentation/components'
import type { Item } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './ListElem.styles.sass'

export type ListElemProps<T extends object = object> = ListBoxItemProps<T> & Pick<Item, 'hasSeparatorBefore'>

export function ListElem <T extends object = object> ({ className, hasSeparatorBefore, ...listElemPros }: ListElemProps<T>) {
  return (
    <>
      {hasSeparatorBefore && <Separator />}

      <ListBoxItem
        {...listElemPros}
        className={(values) => mergeReactAriaClassNames(values, className, 'list-elem')}
      />
    </>
  )
}
