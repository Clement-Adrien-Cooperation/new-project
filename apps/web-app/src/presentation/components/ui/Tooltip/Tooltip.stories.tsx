import type { Meta, StoryObj } from '@storybook/react'
import { SettingsIcon, UserIcon } from 'lucide-react'
import type { FC } from 'react'

import { Button } from '@/presentation/components'

import { Tooltip } from './Tooltip'

const TooltipContent: FC = () => (
  <div style={{ alignItems: 'center', display: 'flex', gap: '0.3rem' }}>
    <UserIcon size='1rem' />
    <p>Tooltip Content</p>
  </div>
)

const TooltipTrigger: FC = () => (
  <Button
    Icon={<SettingsIcon />}
    variant='outlined'
  />
)

const meta: Meta<typeof Tooltip> = {
  args: {
    children: <TooltipContent />,
    Trigger: <TooltipTrigger />
  },
  component: Tooltip,
  title: 'Tooltip'
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const TooltipStory: Story = {
  name: 'Tooltip'
}
