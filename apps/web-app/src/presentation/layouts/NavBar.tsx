import { HomeIcon, SettingsIcon } from 'lucide-react'
import type { FC, ReactElement } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_HOME, ROUTE_SETTINGS } from '@/domain/navigation'
import { ListBox, ListBoxItem, type ListItems } from '@/presentation/components'

import './NavBar.styles.sass'

export const NavBar: FC = () => {
  const { translate } = useI18n()

  const navBarItems: ListItems<string, { Icon: ReactElement }> = [
    { id: 'home', textValue: translate('layouts.navBar.home'), href: ROUTE_HOME, Icon: <HomeIcon /> },
    { id: 'settings', textValue: translate('layouts.navBar.settings'), href: ROUTE_SETTINGS, Icon: <SettingsIcon /> }
  ]

  return (
    <nav className='nav-bar'>
      <ListBox
        aria-label={translate('layouts.navBar.ariaLabel')}
        className='nav-bar__list'
        items={navBarItems}
      >
        {item => (
          <ListBoxItem {...item} className='nav-bar__list__item'>
            {item.Icon}
            {item.textValue}
          </ListBoxItem>
        )}
      </ListBox>
    </nav>
  )
}
