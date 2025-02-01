import React from 'react'

import { I18nService } from '../../application/services/I18nService'

import { DEFAULT_LOCALE, type Locale } from '../../domain/i18n'

import { getPolyglot } from '../../infrastructure/i18n'

import { I18nContext, type TranslateKey, type TranslateOptions } from './I18nContext'

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = React.useState<Locale>(DEFAULT_LOCALE)

  const selectLocale = React.useCallback((newLocale: Locale) => {
    setSelectedLocale(newLocale)
    I18nService.updateDocumentLanguage(newLocale)
  }, [])

  const changeLocale = React.useCallback((newLocale: Locale) => {
    if (I18nService.isSupportedLocale(newLocale)) {
      selectLocale(newLocale)
      I18nService.setLocale(newLocale)
    }
  }, [selectLocale])

  React.useEffect(() => {
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

  const polyglot = React.useMemo(() => getPolyglot(selectedLocale), [selectedLocale])
  const translate = React.useCallback((key: TranslateKey, options?: TranslateOptions) => polyglot.t(key, options), [polyglot])

  return (
    <I18nContext value={{ changeLocale, translate, selectedLocale }}>
      {children}
    </I18nContext>
  )
}
