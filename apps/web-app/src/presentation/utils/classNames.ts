export type ClassName
  = string
  | false
  | undefined
  | null

export type ClassNames = ClassName | ClassName[]

export const mergeClassNames = (...args: ClassNames[]): string => {
  return args
    .flat()
    .filter((value): value is string => typeof value === 'string' && Boolean(value))
    .join(' ')
}
