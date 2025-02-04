export const failure = <E = string>(error: E) => ({
  status: 'error' as const,
  error
})

export const success = <T = void>(data: T) => ({
  status: 'success' as const,
  data
})

export type ErrorResult<E = string> = ReturnType<typeof failure<E>>
export type SuccessResult<T = void> = ReturnType<typeof success<T>>
export type Result<T = void, E = string> = ErrorResult<E> | SuccessResult<T>
