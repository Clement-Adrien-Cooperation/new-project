import { type FC, type PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { I18nProvider as ReactAriaI18nProvider } from 'react-aria-components'

import { I18nService } from '@/application/services'
import type { Locale, TranslateKey, TranslateOptions } from '@/domain/i18n'
import { I18nContext } from '@/presentation/providers'

const initialLocale = I18nService.getInitialLocale()
I18nService.changeLang(initialLocale)

export const I18nProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(initialLocale)

  const changeLocale = useCallback((newLocale: Locale) => {
    I18nService.changeLang(newLocale)
    I18nService.saveFavoriteLocale(newLocale)
    setSelectedLocale(newLocale)
  }, [])

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
