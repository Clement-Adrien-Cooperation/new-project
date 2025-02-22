import type { FC } from 'react'

import { Button, Menu, type MenuItems, PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { HomePageMetadata } from './HomePage.metadata.tsx'
import { SettingsIcon } from 'lucide-react'

const menuItems: MenuItems = [
  { id: '1', textValue: 'Item 1' },
  { id: '2', textValue: 'Item 2' },
  { id: '3', textValue: 'Item 3' }
]

const HomePage: FC = () => (
  <>
    <HomePageMetadata />

    <Main>
      <PageTitle>Home</PageTitle>

      <Menu items={menuItems} Trigger={<Button Icon={<SettingsIcon />} variant='outlined' />} />
    </Main>
  </>
)

export default HomePage
