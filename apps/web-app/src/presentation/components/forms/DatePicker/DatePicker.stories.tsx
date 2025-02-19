import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  args: {
    label: 'Date Picker'
  },
  argTypes: {
    isDisabled: {
      control: 'boolean'
    },
    label: { control: 'text' }
  },
  component: DatePicker,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ],
  title: 'Date Picker'
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const DatePickerStory: Story = {
  name: 'Date Picker'
}
