export const getStringArray = (value: unknown): string[] => {
  return Array.isArray(value)
    ? value.filter((v): v is string => Boolean(v))
    : typeof value === 'string'
      ? [value]
      : []
}
