import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './PageTitle.styles.sass'

type PageTitleProps = ComponentProps<'h1'>

export const PageTitle: FC<PageTitleProps> = ({ children, className, ...pageTitleProps }) => (
  <h1 className={mergeClassNames('page-title', className)} {...pageTitleProps}>{children}</h1>
)

type PageSubtitleProps = ComponentProps<'h2'>

export const PageSubtitle: FC<PageSubtitleProps> = ({ children, className, ...pageSubtitleProps }) => (
  <h2 className={mergeClassNames('page-subtitle', className)} {...pageSubtitleProps}>{children}</h2>
)
