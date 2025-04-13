import { useRequiredContext } from '@/application/utils'

import { I18nContext } from '@/presentation/components'

export const useI18n = () => useRequiredContext(I18nContext, 'I18n')
