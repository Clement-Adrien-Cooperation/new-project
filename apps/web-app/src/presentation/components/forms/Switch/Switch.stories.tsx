import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '@/presentation/components'

const meta: Meta<typeof Switch> = {
  args: {
    children: 'Switch me'
  },
  argTypes: {
    switchSide: {
      control: 'inline-radio',
      options: ['left', 'right']
    },
    isDisabled: {
      control: 'boolean'
    }
  },
  component: Switch,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ],
  title: 'Switch'
}

export default meta
type Story = StoryObj<typeof Switch>

export const SwitchStory: Story = {
  name: 'Switch'
}
