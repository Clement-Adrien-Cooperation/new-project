import type { Dictionary } from '.'

export const fr = {
  components: {
    fallback: {
      message: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.',
      retry: 'Rafraîchir',
      title: 'Oops, une erreur s\'est produite'
    },
    forms: {
      fields: {
        rememberMeCheckboxLabel: 'Se souvenir de moi',
        userName: {
          label: 'Nom d\'utilisateur',
          placeholder: 'Entrez votre nom d\'utilisateur'
        },
        userPassword: {
          label: 'Mot de passe',
          placeholder: 'Entrez votre mot de passe'
        }
      },
      loginForm: {
        submit: 'Connexion'
      },
      passwordField: {
        label: 'Mot de passe',
        placeholder: 'Entrez votre mot de passe'
      },
      requiredFieldsMessage: 'Les champs marqués d\'un * sont obligatoires.'
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
      home: 'Accueil',
      login: 'Connexion',
      settings: 'Paramètres'
    }
  },
  pages: {
    auth: {
      login: {
        title: 'Se connecter'
      }
    },
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
