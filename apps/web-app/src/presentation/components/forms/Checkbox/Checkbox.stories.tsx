import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/presentation/components'

const meta: Meta<typeof Checkbox> = {
  args: {
    children: 'Check me'
  },
  argTypes: {
    checkboxSide: {
      control: 'inline-radio',
      options: ['left', 'right']
    },
    isDisabled: {
      control: 'boolean'
    }
  },
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ],
  title: 'Checkbox'
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const BaseCheckbox: Story = {
  name: 'Checkbox'
}
