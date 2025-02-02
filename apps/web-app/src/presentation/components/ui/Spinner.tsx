import { LoaderCircleIcon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '../../utils'

import './Spinner.styles.sass'

type SpinnerProps = ComponentProps<typeof LoaderCircleIcon>

export const Spinner: FC<SpinnerProps> = ({ className, ...spinnerProps }) => (
  <LoaderCircleIcon className={mergeClassNames('spinner', className)} {...spinnerProps} />
)
