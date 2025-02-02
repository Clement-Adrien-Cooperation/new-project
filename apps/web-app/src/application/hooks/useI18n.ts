import { I18nContext } from '../../presentation/providers/I18nContext'

import { useRequiredContext } from '../utils'

export const useI18n = () => useRequiredContext(I18nContext, 'I18n')
