import { RefreshCcwIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_HOME } from '@/domain/navigation'
import { Button } from '@/presentation/components'
import { ErrorActions, ErrorContent, ErrorTitle, ErrorWrapper } from '@/presentation/layouts'

export const Fallback: FC = () => {
  const { translate } = useI18n()

  return (
    <ErrorWrapper>
      <ErrorTitle>
        {translate('components.fallback.title')}
      </ErrorTitle>

      <ErrorContent>
        {translate('components.fallback.description')}
      </ErrorContent>

      <ErrorActions>
        <Button
          Icon={<RefreshCcwIcon />}
          onPress={() => window.location.replace(ROUTE_HOME) }
          variant='filled'
        >
          {translate('components.fallback.retryButton')}
        </Button>
      </ErrorActions>
    </ErrorWrapper>
  )
}
