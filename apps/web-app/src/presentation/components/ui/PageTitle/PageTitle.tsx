import type { ComponentProps, FC } from 'react'

import { mergeClassNames } from '@/presentation/utils'

import './PageTitle.styles.sass'

type PageTitleProps = ComponentProps<'h1'>

export const PageTitle: FC<PageTitleProps> = ({ children, className, ...pageTitleProps }) => (
  <h1 className={mergeClassNames('page-title', className)} {...pageTitleProps}>{children}</h1>
)
