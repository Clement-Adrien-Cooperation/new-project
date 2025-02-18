export const DEFAULT_ERROR_KEY = 'unexpected-error' as const
export type DefaultErrorKey = typeof DEFAULT_ERROR_KEY

export const failure = <E extends string>(...args: (E | E[])[]): { errors: (E | DefaultErrorKey)[], status: 'error' } => {
  const flattenedErrors = args.flat()
  const uniqueErrors = [...new Set(flattenedErrors)] as (E | DefaultErrorKey)[]

  return {
    errors: uniqueErrors.length > 0 ? uniqueErrors : [DEFAULT_ERROR_KEY],
    status: 'error' as const
  }
}

export function success(): { status: 'success' }
export function success<T>(data: T): { data: T, status: 'success' }
export function success<T>(data?: T) {
  if (data == null) {
    return { status: 'success' }
  }

  return { data, status: 'success' }
}

export type ErrorResult<E extends string | undefined = undefined> = { errors: (E | DefaultErrorKey)[], status: 'error' }

export type SuccessResult<T = undefined> = T extends undefined
  ? { status: 'success' }
  : { status: 'success', data: T }

export type Result<E extends string = DefaultErrorKey, T = undefined>
  = ErrorResult<E | DefaultErrorKey>
  | SuccessResult<T>
