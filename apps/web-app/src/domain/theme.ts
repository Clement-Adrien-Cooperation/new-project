export const SUPPORTED_THEMES = ['dark', 'light', 'system'] as const

export type Theme = typeof SUPPORTED_THEMES[number]

export const DEFAULT_THEME: Theme = 'system'

export const PREFERS_DARK_COLOR_SCHEME_MATCHER = window.matchMedia('(prefers-color-scheme: dark)')
