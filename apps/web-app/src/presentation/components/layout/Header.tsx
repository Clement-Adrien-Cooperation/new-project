import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTES } from '@/domain/navigation'
import { Link, NavBar } from '@/presentation/components'

import './Header.styles.sass'

export const Header: FC = () => {
  const { translate } = useI18n()

  return (
    <header className='header'>
      <Link href={ROUTES.home}>
        {translate('appName')}
      </Link>

      <NavBar />
    </header>
  )
}
