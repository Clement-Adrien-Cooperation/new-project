import { type FC, type PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'

import { I18nService } from '../../application/services/I18nService'
import { DEFAULT_LOCALE, type Locale } from '../../domain/i18n'
import { getPolyglot } from '../../infrastructure/i18n'

import { I18nContext, type I18nKey, type I18nOptions } from './I18nContext'

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(DEFAULT_LOCALE)

  const selectLocale = useCallback((newLocale: Locale) => {
    setSelectedLocale(newLocale)
    I18nService.updateDocumentLanguage(newLocale)
  }, [])

  const changeLocale = useCallback((newLocale: Locale) => {
    if (I18nService.isSupportedLocale(newLocale)) {
      selectLocale(newLocale)
      I18nService.setLocale(newLocale)
    }
  }, [selectLocale])

  useEffect(() => {
    const storedLocale = I18nService.getLocale()

    if (storedLocale != null && I18nService.isSupportedLocale(storedLocale)) {
      selectLocale(storedLocale)
      return
    }

    const navigatorLocale = I18nService.getSupportedNavigatorLocale()

    if (navigatorLocale != null) {
      selectLocale(navigatorLocale)
    }
  }, [selectLocale])

  const polyglot = useMemo(() => getPolyglot(selectedLocale), [selectedLocale])
  const i18n = useCallback((key: I18nKey, options?: I18nOptions) => polyglot.t(key, options), [polyglot])

  return (
    <I18nContext value={{ changeLocale, i18n, selectedLocale }}>
      {children}
    </I18nContext>
  )
}
