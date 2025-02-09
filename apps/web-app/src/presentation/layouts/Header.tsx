import type { FC } from 'react'

import { NavBar } from '@/presentation/layouts'

import './Header.styles.sass'

export const Header: FC = () => {
  return (
    <header className='header'>
      <NavBar />
    </header>
  )
}
