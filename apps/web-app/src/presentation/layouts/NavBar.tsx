import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_SETTINGS } from '@/domain/navigation'

import './NavBar.styles.sass'
import { Link } from '@/presentation/components'

export const NavBar: FC = () => {
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
      textValue: translate('layouts.navBar.login')
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
      <ul className='nav-bar__list'>
        {navBarItems.map(item => (
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
