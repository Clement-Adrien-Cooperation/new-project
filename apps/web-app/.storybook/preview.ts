import type { Preview } from '@storybook/react'

import '@/presentation/styles/base.sass'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered'
  }
}

export default preview
