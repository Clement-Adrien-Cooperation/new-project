import type { Meta, StoryObj } from '@storybook/react'

import { PasswordField } from './PasswordField'
import { I18nProvider } from '@/presentation/providers'

const meta: Meta<typeof PasswordField> = {
  args: {
    description: 'Password Field Description',
    label: 'Password Field Label',
    placeholder: 'Enter password here'
  },
  component: PasswordField,
  decorators: [
    (Story) => (
      <I18nProvider>
        <div style={{ width: 300 }}>
          <Story />
        </div>
      </I18nProvider>
    )
  ],
  title: 'Password Field'
}

export default meta
type Story = StoryObj<typeof PasswordField>

export const PasswordFieldStory: Story = {
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' }
  },
  name: 'Password Field'
}
