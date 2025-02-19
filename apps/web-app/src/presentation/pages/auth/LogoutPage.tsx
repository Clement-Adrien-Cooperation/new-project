import { LogOutIcon } from 'lucide-react'
import type { FC } from 'react'

import { useAuth, useI18n } from '@/application/hooks'
import { Button, PageSubtitle, PageTitle } from '@/presentation/components'
import { Main } from '@/presentation/layouts'

import './LogoutPage.styles.sass'

const LogoutPage: FC = () => {
  const { logout } = useAuth()
  const { translate } = useI18n()

  return (
    <Main className='logout-page'>
      <PageTitle>
        {translate('pages.auth.logout.title')}
      </PageTitle>

      <div className='logout-page__content'>
        <PageSubtitle>
          {translate('pages.auth.logout.subtitle')}
        </PageSubtitle>

        <Button
          className='logout-page__content__confirm-button'
          Icon={<LogOutIcon />}
          iconSide='right'
          onPress={logout}
          variant='filled'
        >
          {translate('pages.auth.logout.buttonLabel')}
        </Button>
      </div>
    </Main>
  )
}

export default LogoutPage
