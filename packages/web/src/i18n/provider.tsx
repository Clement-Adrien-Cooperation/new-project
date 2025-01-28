import React from 'react'

import { getStoredItem, storeItem } from '../helpers/local-storage'

import {
  DEFAULT_LOCALE,
  getPolyglot,
  getSupportedNavigatorLocale,
  I18nContext,
  isSupportedLocale,
  type Locale,
  type TranslateKey,
  type TranslateOptions
} from '.'

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = React.useState<Locale>(DEFAULT_LOCALE)

  const selectLocale = React.useCallback((newLocale: Locale) => {
    setSelectedLocale(newLocale)
    document.documentElement.setAttribute('lang', newLocale)
  }, [])

  const changeLocale = React.useCallback((newLocale: Locale) => {
    if (isSupportedLocale(newLocale)) {
      selectLocale(newLocale)
      storeItem('locale', newLocale)
    }
  }, [selectLocale])

  React.useEffect(() => {
    const storedLocale = getStoredItem('locale')

    if (storedLocale != null && isSupportedLocale(storedLocale)) {
      selectLocale(storedLocale)
      return
    }

    const navigatorLocale = getSupportedNavigatorLocale()

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
