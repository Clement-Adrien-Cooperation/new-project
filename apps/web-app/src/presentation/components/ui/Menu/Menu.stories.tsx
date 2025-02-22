import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SettingsIcon } from 'lucide-react'

import { Menu, type MenuItems } from './Menu'
import { Button } from '@/presentation/components/ui/Pressable'

const menuItems: MenuItems = [
  { id: '1', textValue: 'Option 1 is a lin', href: 'https://www.youtube.com/watch?v=xvFZjo5PgG0', target: '_blank' },
  { id: '2', textValue: 'Option 2 with a pretty long text to see if ellipsis is ok here' },
  { id: '3', textValue: 'Option 3 with an icon', Icon: <SettingsIcon /> },
  { id: '4', textValue: 'Option 4 with long text & icon to see if ellipsis is ok here', Icon: <SettingsIcon /> },
  { id: '5', textValue: 'Option 5 with separator before', hasSeparatorBefore: true },
  { id: '6', textValue: 'Option 6', Icon: <SettingsIcon /> },
  { id: '7', textValue: 'Option 7 (disabled)', Icon: <SettingsIcon />, isDisabled: true },
  { id: '8', textValue: 'Option 8', Icon: <SettingsIcon /> },
  { id: '9', textValue: 'Option 9', Icon: <SettingsIcon /> },
  { id: '10', textValue: 'Option 10', Icon: <SettingsIcon /> },
  { id: '11', textValue: 'Option 11 (disabled)', Icon: <SettingsIcon />, isDisabled: true },
  { id: '12', textValue: 'Option 12', Icon: <SettingsIcon /> },
  { id: '13', textValue: 'Option 13', Icon: <SettingsIcon /> },
  { id: '14', textValue: 'Option 14', Icon: <SettingsIcon /> },
  { id: '15', textValue: 'Option 15', Icon: <SettingsIcon /> },
  { id: '16', textValue: 'Option 16', Icon: <SettingsIcon /> },
  { id: '17', textValue: 'Option 17', Icon: <SettingsIcon /> },
  { id: '18', textValue: 'Option 18', Icon: <SettingsIcon /> },
  { id: '19', textValue: 'Option 19', Icon: <SettingsIcon /> },
  { id: '20', textValue: 'Option 20', Icon: <SettingsIcon /> }
]

const meta: Meta<typeof Menu> = {
  args: {
    items: menuItems,
    onSelectionChange: fn(),
    Trigger: <Button Icon={<SettingsIcon />} variant='outlined' />
  },
  component: Menu,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ],
  title: 'Menu'
}

export default meta
type Story = StoryObj<typeof Menu>

export const MenuStory: Story = {
  name: 'Menu'
}
