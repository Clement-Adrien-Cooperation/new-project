import type { Meta, StoryObj } from '@storybook/react'
import { UserIcon } from 'lucide-react'

import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  args: {
    description: 'Text Field Description',
    label: 'Text Field Label',
    placeholder: 'Enter text here'
  },
  argTypes: {
    label: { control: 'text' },
    maxLength: { control: 'number' },
    minLength: { control: 'number' },
    placeholder: { control: 'text' }
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
  name: 'Text Field'
}

export const TextFieldWithLeftIconStory: Story = {
  args: {
    LeftIcon: <UserIcon />
  },
  name: 'Text Field with left icon'
}
