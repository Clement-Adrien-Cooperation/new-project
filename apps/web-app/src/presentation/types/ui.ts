import type { ReactElement } from 'react'
import type { Key as ReactAriaKey } from 'react-aria-components'

export type Key = ReactAriaKey

type BaseItem <T extends Key> = {
  /** Indicates whether a separator should be shown before this item. */
  hasSeparatorBefore?: boolean

  /** The icon to display next to the item. */
  Icon?: ReactElement

  /** The ID of the item. */
  id: T

  /** Indicates whether the item is visible. */
  isVisible?: boolean

  /** The text value of the item. */
  textValue: string
}

export type Item <T extends Key = Key, BaseProps = object>
  = Omit<BaseProps, 'id' | 'textValue'>
  & BaseItem<T>

export type Style = Record<string, null | number | string>
