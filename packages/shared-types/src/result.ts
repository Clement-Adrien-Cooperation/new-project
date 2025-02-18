export function failure(): { status: 'error' }
export function failure<E>(errors: E): { errors: E, status: 'error' }
export function failure<E>(errors?: E) {
  if (errors == null) {
    return { status: 'error' }
  }

  return { errors, status: 'error' }
}

export function success(): { status: 'success' }
export function success<T>(data: T): { data: T, status: 'success' }
export function success<T>(data?: T) {
  if (data == null) {
    return { status: 'success' }
  }

  return { data, status: 'success' }
}

export type ErrorResult<E = undefined> = E extends undefined | null
  ? { status: 'error' }
  : { errors: E, status: 'error' }

export type SuccessResult<T = undefined> = T extends undefined | null
  ? { status: 'success' }
  : { data: T, status: 'success' }

export type Result<E = undefined, T = undefined>
  = ErrorResult<E>
  | SuccessResult<T>
