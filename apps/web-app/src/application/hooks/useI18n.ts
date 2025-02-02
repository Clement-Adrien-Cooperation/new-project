import { useRequiredContext } from '@/application/utils'

import { I18nContext } from '@/presentation/providers'

export const useI18n = () => useRequiredContext(I18nContext, 'I18n')
