import { type ComponentType, lazy, type ReactElement, Suspense } from 'react'

import { Spinner } from '@/presentation/components'

export const lazyPage = <P extends object>(
  importPath: () => Promise<{ default: ComponentType<P> }>,
  fallback: ReactElement = <Spinner />
) => {
  const Component = lazy(importPath)

  return (props: P) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}
