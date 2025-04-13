import type { FC } from 'react'

import { Main, PageTitle } from '@/presentation/components'

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
