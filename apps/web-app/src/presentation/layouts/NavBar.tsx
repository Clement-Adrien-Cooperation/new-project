import { HomeIcon, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'
import type { FC } from 'react'
import { useLocation } from 'react-router'

import { useAuth, useI18n } from '@/application/hooks'
import { ROUTES } from '@/domain/navigation'
import { Link } from '@/presentation/components'

import './NavBar.styles.sass'

export const NavBar: FC = () => {
  const { auth } = useAuth()
  const { translate } = useI18n()
  const location = useLocation()

  const navBarItems = [
    {
      href: ROUTES.home,
      Icon: <HomeIcon />,
      id: 'home',
      textValue: translate('layouts.navBar.home')
    },
    {
      href: ROUTES.login,
      Icon: <UserIcon />,
      id: 'login',
      isVisible: auth.status === 'unauthenticated',
      textValue: translate('layouts.navBar.login')
    },
    {
      href: ROUTES.settings,
      Icon: <SettingsIcon />,
      id: 'settings',
      textValue: translate('layouts.navBar.settings')
    },
    {
      href: ROUTES.logout,
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
              isDisabled={location.pathname === item.href}
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
