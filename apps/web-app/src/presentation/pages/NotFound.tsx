import { HomeIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_HOME } from '@/domain/navigation'
import { Link } from '@/presentation/components'
import { ErrorActions, ErrorContent, ErrorTitle, ErrorWrapper } from '@/presentation/layouts'

type NotFoundProps = {
  goBackPath?: string
}

export const NotFound: FC<NotFoundProps> = ({ goBackPath = ROUTE_HOME }) => {
  const { translate } = useI18n()

  return (
    <ErrorWrapper>
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
    </ErrorWrapper>
  )
}
