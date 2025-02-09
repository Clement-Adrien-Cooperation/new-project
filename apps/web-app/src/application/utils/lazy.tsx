import { type ComponentType, lazy, type ReactElement, Suspense } from 'react'

import { Loader } from '@/presentation/components'

export const lazyPage = <P extends object>(
  importPath: () => Promise<{ default: ComponentType<P> }>,
  fallback: ReactElement = <Loader />
) => {
  const Component = lazy(importPath)

  return (props: P) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}
