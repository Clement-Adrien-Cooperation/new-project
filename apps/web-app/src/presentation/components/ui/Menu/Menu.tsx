import type { ReactNode } from 'react'
import { type MenuItemRenderProps, MenuTrigger, Popover, Menu as ReactAriaMenu, type MenuProps as ReactAriaMenuProps } from 'react-aria-components'

import { MenuElem, type MenuElemProps, Option, Tooltip } from '@/presentation/components'
import type { Item, Key } from '@/presentation/types'
import { mergeClassNames, mergeReactAriaClassNames } from '@/presentation/utils'

import './Menu.styles.sass'

export type MenuItem <K extends Key = Key, O extends object = object> = Item<K, MenuElemProps<O>>
export type MenuItems <K extends Key = Key, O extends object = object> = Iterable<MenuItem<K, O>>

type MenuChildrenRenderProps <K extends Key, O extends object = object> = MenuItem<K, O> & MenuItemRenderProps

type MenuOverrideProps <K extends Key, O extends object> = {
  /** The list of items to render. */
  children?: ReactNode | ((item: MenuChildrenRenderProps<K, O>) => ReactNode)

  /** Additional className for each item */
  itemClassName?: MenuElemProps<O>['className']

  /** Callback with item in parameters when user press an item */
  onAction?: (item: MenuItem<K, O>) => void

  /** The trigger element */
  Trigger: ReactNode
}

type MenuProps <K extends Key, O extends object>
  = Omit<ReactAriaMenuProps<MenuItem<K, O>>, keyof MenuOverrideProps<K, O>>
  & MenuOverrideProps<K, O>

export function Menu <K extends Key, O extends object> ({
  children,
  className,
  itemClassName,
  items,
  onAction,
  Trigger,
  ...menuProps
}: MenuProps<K, O>) {
  const onMenuAction = (key: Key) => {
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
    <MenuTrigger>
      {Trigger}

      <Popover>
        <ReactAriaMenu
          className={mergeClassNames('menu', className)}
          items={items}
          onAction={onAction && onMenuAction}
          {...menuProps}
        >
          {typeof children === 'function' || children == null
            ? (item) => item.isVisible !== false && (
                <Tooltip Trigger={
                  <MenuElem
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
                          Icon={item.Icon}
                          isDisabled={values.isDisabled}
                          isSelected={values.isSelected}
                          textValue={item.textValue}
                        />
                    }
                  </MenuElem>
                }>
                  test 2
                </Tooltip>
              )
            : children
          }
        </ReactAriaMenu>
      </Popover>
    </MenuTrigger>
  )
}
