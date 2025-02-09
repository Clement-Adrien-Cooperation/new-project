import type { Dictionary } from '.'

export const fr = {
  components: {
    fallback: {
      title: 'Oops, une erreur s\'est produite',
      description: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.',
      retryButton: 'Revenir à l\'accueil'
    },
    localeSwitcher: {
      label: 'Langue'
    },
    themeSwitcher: {
      dark: 'Sombre',
      label: 'Theme',
      light: 'Clair',
      system: 'Système'
    }
  },
  pages: {
    settings: {
      title: 'Paramètres'
    }
  }
} satisfies Dictionary
