import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './PageSubtitle.styles.sass'

type PageSubtitleProps = ComponentProps<'h2'>

export const PageSubtitle: FC<PageSubtitleProps> = ({ className, ...pageSubtitleProps }) => (
  <h2 className={mergeClassNames('page-subtitle', className)} {...pageSubtitleProps} />
)
