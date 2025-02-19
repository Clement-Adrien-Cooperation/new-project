import { RefreshCcwIcon } from 'lucide-react'
import type { FC } from 'react'

import { useI18n } from '@/application/hooks'
import { ROUTE_DEFAULT } from '@/domain/navigation'
import { Button } from '@/presentation/components'
import { ErrorActions, ErrorContent, ErrorTitle, ErrorWrapper } from '@/presentation/layouts'

type FallbackProps = {
  /** Error message to display */
  message?: string

  /** Route to redirect to when retrying */
  route?: string
}

export const Fallback: FC<FallbackProps> = ({ message, route }) => {
  const { translate } = useI18n()

  return (
    <ErrorWrapper>
      <ErrorTitle>
        {translate('components.fallback.title')}
      </ErrorTitle>

      <ErrorContent>
        {message ?? translate('components.fallback.message')}
      </ErrorContent>

      <ErrorActions>
        <Button
          Icon={<RefreshCcwIcon />}
          onPress={() => window.location.replace(route ?? ROUTE_DEFAULT) }
          variant='filled'
        >
          {translate('components.fallback.retry')}
        </Button>
      </ErrorActions>
    </ErrorWrapper>
  )
}
