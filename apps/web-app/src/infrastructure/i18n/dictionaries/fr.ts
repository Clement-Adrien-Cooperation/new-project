import type { Dictionary } from '.'

export const fr = {
  components: {
    fallback: {
      message: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.',
      retry: 'Rafraîchir',
      title: 'Oops, une erreur s\'est produite'
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
  layouts: {
    navBar: {
      ariaLabel: 'Navigation principale',
      home: 'Accueil',
      settings: 'Paramètres'
    }
  },
  pages: {
    notFound: {
      goBack: 'Go back',
      message: 'La page que vous cherchez n\'existe pas.',
      title: 'Not found'
    },
    settings: {
      title: 'Paramètres'
    }
  }
} satisfies Dictionary
