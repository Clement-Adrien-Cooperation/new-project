import type { FC } from 'react'

import { PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import { HomePageMetadata } from './HomePage.metadata.tsx'

const HomePage: FC = () => (
  <>
    <HomePageMetadata />

    <Main>
      <PageTitle>Home</PageTitle>
    </Main>
  </>
)

export default HomePage
