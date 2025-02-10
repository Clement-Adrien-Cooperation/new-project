const APP_NAME = 'New project'
const APP_CREATOR = 'Adrien Lacourpaille, Clément Charles'
const BASE_URL = 'http://localhost:5173'

export const DEFAULT_METADATA = {
  title: APP_NAME,
  description: 'A new project to train devs',
  applicationName: APP_NAME,
  author: APP_CREATOR,
  authorUrl: 'https://www.adrienlacourpaille.com, https://www.linkedin.com/in/clementchar/',
  keywords: '',
  referrer: 'strict-origin-when-cross-origin',
  creator: APP_CREATOR,
  url: BASE_URL,
  category: 'Organisation de Soirées Jeux',
  classification: 'Divertissement et Réseautage Social'
}

export type Metadata = typeof DEFAULT_METADATA

export const mergeTitle = (title: string) => `${title} - ${APP_NAME}`
export const mergeUrl = (url: string) => `${BASE_URL}${url}`
