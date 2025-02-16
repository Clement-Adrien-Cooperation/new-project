const APP_NAME = 'New project'
const APP_CREATOR = 'Adrien Lacourpaille, Clément Charles'
const BASE_URL = 'http://localhost:5173'

export const DEFAULT_METADATA = {
  title: `${APP_NAME} - Organisation de soirées jeux`,
  description: 'Planifiez des soirées jeux avec vos amis en fonction des disponibilités de chacun.',
  applicationName: APP_NAME,
  author: APP_CREATOR,
  authorUrl: 'https://www.adrienlacourpaille.com, https://www.linkedin.com/in/clementchar/',
  keywords: 'soirées jeux, organisation, amis, groupe, calendrier, planning, jeux de société, jeux en ligne',
  referrer: 'strict-origin-when-cross-origin',
  creator: APP_CREATOR,
  url: BASE_URL,
  category: 'Organisation de Soirées Jeux',
  classification: 'Divertissement et Réseautage Social'
}

export type Metadata = typeof DEFAULT_METADATA

export const mergeTitle = (title: string, appName = APP_NAME) => `${title} - ${appName}`
export const mergeUrl = (url: string) => `${BASE_URL}${url}`
