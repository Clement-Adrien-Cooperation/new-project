import { HomeIcon, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'
import type { FC } from 'react'

import { useAuth, useI18n } from '@/application/hooks'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_LOGOUT, ROUTE_SETTINGS } from '@/domain/navigation'
import { Link } from '@/presentation/components'

import './NavBar.styles.sass'

export const NavBar: FC = () => {
  const { auth } = useAuth()
  const { translate } = useI18n()

  const navBarItems = [
    {
      href: ROUTE_HOME,
      Icon: <HomeIcon />,
      id: 'home',
      textValue: translate('layouts.navBar.home')
    },
    {
      href: ROUTE_LOGIN,
      Icon: <UserIcon />,
      id: 'login',
      isVisible: auth.status === 'unauthenticated',
      textValue: translate('layouts.navBar.login')
    },
    {
      href: ROUTE_SETTINGS,
      Icon: <SettingsIcon />,
      id: 'settings',
      textValue: translate('layouts.navBar.settings')
    },
    {
      href: ROUTE_LOGOUT,
      Icon: <LogOutIcon />,
      id: 'logout',
      isVisible: auth.status === 'authenticated',
      textValue: translate('layouts.navBar.logout')
    }
  ]

  const filteredNavBarItems = navBarItems.filter(item => item.isVisible !== false)

  return (
    <nav className='nav-bar'>
      <ul className='nav-bar__list'>
        {filteredNavBarItems.map(item => (
          <li key={item.id} role='none'>
            <Link
              className='nav-bar__list__item'
              href={item.href}
              Icon={item.Icon}
              variant='underlined'
            >
              {item.textValue}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
