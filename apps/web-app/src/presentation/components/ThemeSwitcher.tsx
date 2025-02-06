import type { FC } from 'react'

import { useTheme } from '@/application/hooks'

import { Button, Separator } from '@/presentation/components'

import './ThemeSwitcher.styles.sass'
import { SettingsIcon } from 'lucide-react'

export const ThemeSwitcher: FC = () => {
  const { changeTheme, selectedTheme } = useTheme()

  return (
    <>
      <div>selected theme : {selectedTheme}</div>

      <div className='box'>
        <Button Icon={<SettingsIcon />} onPress={() => changeTheme('system')} variant='outlined'>system</Button>
        <Separator orientation='vertical' />
        <Button Icon={<SettingsIcon />} iconSide='right' onPress={() => changeTheme('dark')} variant='tonal'>dark</Button>
        <Separator orientation='vertical' />
        <Button Icon={<SettingsIcon />} onPress={() => changeTheme('light')} variant='transparent' />
      </div>
    </>
  )
}
