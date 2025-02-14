import type { FC } from 'react'

import { Button, type ButtonProps } from '@/presentation/components'

import './SubmitButton.styles.sass'

export const SubmitButton: FC<ButtonProps> = (buttonProps) => (
  <Button
    className='submit-button'
    type='submit'
    variant='filled'
    {...buttonProps}
  />
)
