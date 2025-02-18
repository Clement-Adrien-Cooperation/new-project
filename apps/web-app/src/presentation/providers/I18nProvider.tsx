import { type FC, type PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react'
import { I18nProvider as ReactAriaI18nProvider } from 'react-aria-components'

import { I18nService } from '@/application/services'
import { DEFAULT_LOCALE, type Locale, type TranslateKey, type TranslateOptions } from '@/domain/i18n'
import { I18nContext } from '@/presentation/providers'

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(DEFAULT_LOCALE)

  const selectLocale = useCallback((newLocale: Locale) => {
    I18nService.changeLocale(newLocale)
    setSelectedLocale(newLocale)
  }, [])

  const changeLocale = useCallback((newLocale: Locale) => {
    I18nService.saveFavoriteLocale(newLocale)
    selectLocale(newLocale)
  }, [selectLocale])

  useEffect(() => {
    const initialLocale = I18nService.getInitialLocale()
    selectLocale(initialLocale)
  }, [selectLocale])

  const polyglot = useMemo(() => I18nService.getPolyglot(selectedLocale), [selectedLocale])

  const translate = useCallback((key: TranslateKey, options?: TranslateOptions) => {
    return polyglot.t(key, options)
  }, [polyglot])

  return (
    <I18nContext value={{ changeLocale, selectedLocale, translate }}>
      <ReactAriaI18nProvider locale={selectedLocale}>
        {children}
      </ReactAriaI18nProvider>
    </I18nContext>
  )
}
