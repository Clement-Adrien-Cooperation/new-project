import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SettingsIcon } from 'lucide-react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  args: { onPress: fn() },
  argTypes: {
    isDisabled: {
      control: 'boolean'
    },
    size: {
      control: 'inline-radio',
      options: ['medium', 'small']
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'tonal', 'transparent', 'underlined']
    }
  },
  component: Button,
  title: 'Button'
}

export default meta
type Story = StoryObj<typeof Button>

const BUTTON_LABEL = 'Press me'

export const ButtonWithLabel: Story = {
  args: {
    children: BUTTON_LABEL,
    variant: 'filled'
  },
  name: 'Button with label'
}

export const IconButton: Story = {
  args: {
    Icon: <SettingsIcon />,
    variant: 'outlined'
  },
  name: 'Button with icon'
}

export const IconButtonWithLabel: Story = {
  args: {
    children: BUTTON_LABEL,
    Icon: <SettingsIcon />,
    variant: 'tonal'
  },
  argTypes: {
    iconSide: {
      control: 'inline-radio',
      options: ['left', 'right']
    }
  },
  name: 'Button with icon & label'
}
