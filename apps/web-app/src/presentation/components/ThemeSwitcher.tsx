import type { FC } from 'react'

import { useTheme } from '@/application/hooks'

import { Button, Separator } from '@/presentation/components'

import './ThemeSwitcher.styles.sass'

export const ThemeSwitcher: FC = () => {
  const { changeTheme, selectedTheme } = useTheme()

  return (
    <>
      <div>selected theme : {selectedTheme}</div>

      <div className='box'>
        <Button onPress={() => changeTheme('system')} variant='outlined'>system</Button>
        <Separator orientation='vertical' />
        <Button onPress={() => changeTheme('dark')} variant='outlined'>dark</Button>
        <Separator orientation='vertical' />
        <Button onPress={() => changeTheme('light')} variant='outlined'>Light</Button>
      </div>
    </>
  )
}
