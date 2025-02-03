import { type FC, type PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { I18nService } from '@/application/services'
import { DEFAULT_LOCALE, type Locale } from '@/domain/i18n'
import { getPolyglot } from '@/infrastructure/i18n'
import { I18nContext, type I18nKey, type I18nOptions } from '@/presentation/providers'

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(DEFAULT_LOCALE)

  const selectLocale = useCallback((newLocale: Locale) => {
    setSelectedLocale(newLocale)
    I18nService.changeLocale(newLocale)
  }, [])

  const changeLocale = useCallback((newLocale: Locale) => {
    selectLocale(newLocale)
    I18nService.saveFavoriteLocale(newLocale)
  }, [selectLocale])

  useEffect(() => {
    const initialLocale = I18nService.getInitialLocale()
    selectLocale(initialLocale)
  }, [selectLocale])

  const polyglot = useMemo(() => getPolyglot(selectedLocale), [selectedLocale])
  const i18n = useCallback((key: I18nKey, options?: I18nOptions) => polyglot.t(key, options), [polyglot])

  return (
    <I18nContext value={{ changeLocale, i18n, selectedLocale }}>
      {children}
    </I18nContext>
  )
}
