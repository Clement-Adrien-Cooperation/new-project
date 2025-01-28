import { useI18n } from '.'

export const LocaleSwitcher: React.FC = () => {
  const { changeLocale, selectedLocale, translate } = useI18n()

  return (
    <>
      {translate('helloWorld')}
      <br />
      selected locale: {selectedLocale}
      <br />
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('fr')}>French</button>
    </>
  )
}
