import { HomeIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { Link } from '@/presentation/components'
import { ErrorActions, ErrorContent, ErrorTitle, Main } from '@/presentation/layouts'

import { NotFoundPageMetadata } from './NotFoundPage.metadata.tsx'

import './NotFoundPage.styles.sass'

type NotFoundPageProps = {
  goBackPath?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ goBackPath = ROUTE_DEFAULT }) => {
  const { translate } = useI18n()

  return (
    <>
      <NotFoundPageMetadata />

      <Main className='not-found-page'>
        <ErrorTitle>
          {translate('pages.notFound.title')}
        </ErrorTitle>

        <ErrorContent>
          {translate('pages.notFound.message')}
        </ErrorContent>

        <ErrorActions>
          <Link
            href={goBackPath}
            Icon={<HomeIcon />}
            variant='filled'
          >
            {translate('pages.notFound.goBack')}
          </Link>
        </ErrorActions>
      </Main>
    </>
  )
}
