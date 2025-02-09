import type { FC } from 'react'
import {
  ListBoxItem as ReactAriaListBoxItem,
  type ListBoxItemProps as ReactAriaListBoxItemProps
} from 'react-aria-components'

import { mergeReactAriaClassNames } from '@/presentation/utils'

import './ListBoxItem.styles.sass'

export type ListBoxItemProps = ReactAriaListBoxItemProps

export const ListBoxItem: FC<ListBoxItemProps> = ({ className, ...listBoxItemPros }) => (
  <ReactAriaListBoxItem
    {...listBoxItemPros}
    className={(values) => mergeReactAriaClassNames(values, className, 'list-box-item')}
  />
)
