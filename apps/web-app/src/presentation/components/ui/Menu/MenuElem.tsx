import { MenuItem, type MenuItemProps } from 'react-aria-components'

import { Separator } from '@/presentation/components'
import type { Item } from '@/presentation/types'
import { mergeReactAriaClassNames } from '@/presentation/utils'

import './MenuElem.styles.sass'

export type MenuElemProps <T extends object = object> = MenuItemProps<T> & Pick<Item, 'hasSeparatorBefore'>

export function MenuElem <T extends object = object> ({ className, hasSeparatorBefore, ...menuElemPros }: MenuElemProps<T>) {
  return (
    <>
      {hasSeparatorBefore && <Separator />}

      <MenuItem
        {...menuElemPros}
        className={(values) => mergeReactAriaClassNames(values, className, 'menu-elem')}
      />
    </>
  )
}
