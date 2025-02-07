import type { FC } from 'react'

import { useTheme } from '@/application/hooks'

import { Button, type PickerItems, Select, Separator } from '@/presentation/components'

import './ThemeSwitcher.styles.sass'
import { SettingsIcon } from 'lucide-react'

const items: PickerItems = [
  { id: '1', textValue: 'Item 1' },
  { id: '2', textValue: 'Item 2', Icon: <SettingsIcon />, isDisabled: true },
  { id: '3', textValue: 'Item 3', hasSeparatorBefore: true },
  { id: '4', textValue: 'Item 4' },
  { id: '5', textValue: 'Item 5 avec right icon bla bla bla bla bla' },
  { id: '6', textValue: 'Item 5 avec left icon bla bla bla bla bla', Icon: <SettingsIcon /> },
  { id: '7', textValue: 'Item 5 avec left & right icon bla bla bla bla bla', Icon: <SettingsIcon /> },
  { id: '11', textValue: 'Item 1' },
  { id: '112', textValue: 'Item 1' },
  { id: '113', textValue: 'Item 1' },
  { id: '114', textValue: 'Item 1' },
  { id: '115', textValue: 'Item 1' },
  { id: '116', textValue: 'Item 1' },
  { id: '117', textValue: 'Item 1' },
  { id: '118', textValue: 'Item 1' },
  { id: '119', textValue: 'Item 1' },
  { id: '1111', textValue: 'Item 1' },
  { id: '1122', textValue: 'Item 1' },
  { id: '1133', textValue: 'Item 1' },
  { id: '1144', textValue: 'Item 1' },
  { id: '1155', textValue: 'Item 1' },
  { id: '1166', textValue: 'Item 1' },
  { id: '1177', textValue: 'Item 1' },
  { id: '1188', textValue: 'Item 1' },
  { id: '1199', textValue: 'Item 1' },
  { id: '11111', textValue: 'Item 1' },
  { id: '11222', textValue: 'Item 1' },
  { id: '11333', textValue: 'Item 1' },
  { id: '11444', textValue: 'Item 1' },
  { id: '11555', textValue: 'Item 1' },
  { id: '11666', textValue: 'Item 1' },
  { id: '11777', textValue: 'Item 1' },
  { id: '11888', textValue: 'Item 1' },
  { id: '11999', textValue: 'Item 1' },
  { id: '111111', textValue: 'Item 1' },
  { id: '115555', textValue: 'Item 1' },
  { id: '116666', textValue: 'Item 1' },
  { id: '117777', textValue: 'Item 1' }
]

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
        <Separator orientation='vertical' />
        <Button Icon={<SettingsIcon />} onPress={() => changeTheme('system')} variant='tonal'>system</Button>
        <Separator orientation='vertical' />
        <Select
          className='select'
          items={items}
          placeholder='Select an item'
        />
      </div>
    </>
  )
}
