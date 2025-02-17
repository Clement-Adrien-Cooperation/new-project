import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'
import { UserIcon } from 'lucide-react'

const meta: Meta<typeof TextField> = {
  args: {
    description: 'Text Field Description',
    label: 'Text Field Label',
    placeholder: 'Enter text here'
  },
  component: TextField,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ],
  title: 'Text Field'
}

export default meta
type Story = StoryObj<typeof TextField>

export const TextFieldStory: Story = {
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' }
  },
  name: 'Text Field'
}

export const TextFieldWithLeftIconStory: Story = {
  args: {
    LeftIcon: <UserIcon />
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' }
  },
  name: 'Text Field with left icon'
}
