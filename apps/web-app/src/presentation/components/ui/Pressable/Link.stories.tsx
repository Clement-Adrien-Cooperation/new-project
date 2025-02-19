import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Link2Icon } from 'lucide-react'

import { Link } from './Link'

const meta: Meta<typeof Link> = {
  args: { onPress: fn() },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['medium', 'small']
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'outlined', 'tonal', 'transparent', 'underlined']
    }
  },
  component: Link,
  title: 'Link'
}

export default meta
type Story = StoryObj<typeof Link>

const LINK_ICON = <Link2Icon />
const LINK_LABEL = 'Go to page'
const LINK_VARIANT = 'underlined'

export const LinkWithLabelStory: Story = {
  args: {
    children: LINK_LABEL,
    variant: LINK_VARIANT
  },
  name: 'Link with label'
}

export const IconLinkStory: Story = {
  args: {
    Icon: LINK_ICON,
    variant: 'tonal'
  },
  name: 'Link with icon'
}

export const IconLinkWithLabelStory: Story = {
  args: {
    children: LINK_LABEL,
    Icon: LINK_ICON,
    variant: LINK_VARIANT
  },
  argTypes: {
    iconSide: {
      control: 'inline-radio',
      options: ['left', 'right']
    }
  },
  name: 'Link with icon & label'
}
