export const DEFAULT_ERROR_KEY = 'unexpected-error'

export const failure = <E>(errors?: E) => ({
  errors: errors ?? [DEFAULT_ERROR_KEY],
  status: 'error' as const
})

export function success(): { status: 'success' }
export function success<T>(data: T): { status: 'success', data: T }
export function success<T>(data?: T) {
  if (data === undefined) {
    return { status: 'success' }
  }

  return { status: 'success', data }
}

export type ErrorResult<E = undefined> = ReturnType<typeof failure<E>>

export type SuccessResult<T = undefined> = T extends undefined
  ? { status: 'success' }
  : { status: 'success', data: T }

export type Result<E = undefined, T = undefined> = ErrorResult<E> | SuccessResult<T>
