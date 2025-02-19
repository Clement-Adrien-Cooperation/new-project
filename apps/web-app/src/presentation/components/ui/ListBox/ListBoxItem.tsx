import type { FC } from 'react'
import {
  ListBoxItem as ReactAriaListBoxItem,
  type ListBoxItemProps as ReactAriaListBoxItemProps
} from 'react-aria-components'

import { Separator } from '@/presentation/components'
import type { CommonItem } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './ListBoxItem.styles.sass'

export type ListBoxItemProps = ReactAriaListBoxItemProps & Pick<CommonItem, 'hasSeparatorBefore'>

export const ListBoxItem: FC<ListBoxItemProps> = ({ className, hasSeparatorBefore, ...listBoxItemPros }) => (
  <>
    {hasSeparatorBefore && <Separator />}

    <ReactAriaListBoxItem
      {...listBoxItemPros}
      className={(values) => mergeReactAriaClassNames(values, className, 'list-box-item')}
    />
  </>
)
