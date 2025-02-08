import type { Key as ReactAriaKey } from 'react-aria-components'

export type Key = ReactAriaKey

type BaseListItemObject <T extends Key, BaseProps = object> = BaseProps & {
  /** Indicates whether a separator should be shown before this item. */
  hasSeparatorBefore?: boolean

  /** The ID of the item. */
  id: T

  /** The text value of the item. */
  textValue: string
}

export type ListItemObject <T extends Key, BaseProps = object>
  = Omit<BaseProps, 'id' | 'textValue'>
  & BaseListItemObject<T, BaseProps>
