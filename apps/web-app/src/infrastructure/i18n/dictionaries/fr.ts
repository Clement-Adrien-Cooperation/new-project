import type { Dictionary } from '.'

export const fr = {
  components: {
    fallback: {
      message: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.',
      retry: 'Rafraîchir',
      title: 'Oops, une erreur s\'est produite'
    },
    forms: {
      passwordField: {
        label: 'Mot de passe',
        placeholder: 'Entrez votre mot de passe'
      }
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
      login: 'Connexion',
      settings: 'Paramètres'
    }
  },
  pages: {
    home: {
      metadata: {
        title: 'New project'
      }
    },
    notFound: {
      goBack: 'Go back',
      message: 'La page que vous cherchez n\'existe pas.',
      title: 'Not found'
    },
    settings: {
      title: 'Paramètres',
      metadata: {
        title: 'Paramètres'
      }
    }
  }
} satisfies Dictionary
