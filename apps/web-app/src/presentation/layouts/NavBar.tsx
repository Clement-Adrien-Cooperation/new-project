import { HomeIcon, SettingsIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_HOME, ROUTE_SETTINGS } from '@/domain/navigation'
import { ListBox, type ListItems } from '@/presentation/components'

import './NavBar.styles.sass'

export const NavBar: FC = () => {
  const { translate } = useI18n()

  const navBarItems: ListItems = [
    {
      href: ROUTE_HOME,
      Icon: <HomeIcon />,
      id: 'home',
      textValue: translate('layouts.navBar.home')
    },
    {
      href: ROUTE_SETTINGS,
      Icon: <SettingsIcon />,
      id: 'settings',
      textValue: translate('layouts.navBar.settings')
    }
  ]

  return (
    <nav className='nav-bar'>
      <ListBox
        aria-label={translate('layouts.navBar.ariaLabel')}
        className='nav-bar__list'
        itemClassName='nav-bar__list__item'
        items={navBarItems}
      >
        {item => (
          <>
            {item.Icon}
            {item.textValue}
          </>
        )}
      </ListBox>
    </nav>
  )
}
