import type { Dictionary } from '.'

export const fr = {
  appName: 'New project',
  components: {
    fallback: {
      message: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.',
      retry: 'Rafraîchir',
      title: 'Oops, une erreur s\'est produite'
    },
    forms: {
      fields: {
        email: {
          label: 'Adresse mail',
          placeholder: 'Entrez votre email'
        },
        passwordsValidation: {
          confirmPasswordLabel: 'Confirmer le mot de passe',
          confirmPasswordPlaceholder: 'Retapez votre mot de passe'
        },
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
        errors: {
          invalidCredentials: 'Les identifiants fournis sont incorrects. Veuillez réessayer.'
        },
        submit: 'Connexion',
        userNameOrEmail: {
          label: 'Nom d\'utilisateur ou email',
          placeholder: 'Entrez votre nom d\'utilisateur ou email'
        }
      },
      passwordField: {
        label: 'Mot de passe',
        placeholder: 'Entrez votre mot de passe'
      },
      registerForm: {
        submit: 'Créer un compte'
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
  errors: {
    unexpected: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.'
  },
  layouts: {
    navBar: {
      home: 'Accueil',
      login: 'Connexion',
      logout: 'Déconnexion',
      settings: 'Paramètres'
    }
  },
  pages: {
    auth: {
      login: {
        metadata: {
          category: 'Authentification et Sécurité',
          classification: 'Connexion et Gestion des Comptes',
          description: 'Connectez-vous pour accéder à votre compte et organiser vos soirées jeux avec vos amis.',
          keywords: 'connexion, authentification, compte, mot de passe, sécurité, accès',
          title: 'Connexion à votre compte'
        },
        register: {
          link: 'Inscrivez-vous.',
          message: 'Vous n\'avez pas de compte ?'
        },
        title: 'Se connecter'
      },
      logout: {
        buttonLabel: 'Oui, se déconnecter',
        metadata: {
          category: 'Authentification et Sécurité',
          classification: 'Déconnexion et Gestion des Comptes',
          description: 'Vous êtes en train de vous déconnecter de votre compte. Revenez quand vous voulez pour organiser vos soirées jeux.',
          keywords: 'déconnexion, logout, sécurité, compte, quitter, session',
          title: 'Déconnexion en cours'
        },
        subtitle: 'Voulez-vous vraiment vous déconnecter ?',
        title: 'Déconnexion'
      },
      register: {
        login: {
          link: 'Connectez-vous.',
          message: 'Vous avez déjà un compte ?'
        },
        metadata: {
          category: 'Authentification et Sécurité',
          classification: 'Création de Compte et Inscription',
          description: 'Créez un compte pour organiser des soirées jeux et inviter vos amis à rejoindre vos groupes.',
          keywords: 'inscription, créer un compte, nouveau compte, rejoindre, authentification',
          title: 'Créer un compte'
        },
        title: 'Créer un compte'
      }
    },
    home: {
      metadata: {
        category: 'Organisation de Soirées Jeux',
        classification: 'Divertissement et Réseautage Social',
        description: 'Planifiez des soirées jeux avec vos amis en fonction des disponibilités de chacun.',
        keywords: 'soirées jeux, organisation, amis, groupe, calendrier, planning, jeux de société, jeux en ligne',
        title: 'Organisation de soirées jeux'
      }
    },
    notFound: {
      goBack: 'Go back',
      message: 'La page que vous cherchez n\'existe pas.',
      metadata: {
        category: 'Erreur et Navigation',
        classification: 'Expérience Utilisateur et Accès',
        description: 'La page que vous recherchez est introuvable. Vérifiez l\'URL ou retournez à l\'accueil.',
        keywords: 'erreur 404, page introuvable, lien cassé, page non trouvée, erreur',
        title: 'Page introuvable'
      },
      title: 'Not found'
    },
    settings: {
      title: 'Paramètres',
      metadata: {
        category: 'Personnalisation et Accessibilité',
        classification: 'Expérience Utilisateur et Paramètres',
        description: 'Personnalisez votre expérience en changeant le thème de l\'application et la langue d\'affichage.',
        keywords: 'paramètres, personnalisation, thème, mode sombre, langue, accessibilité, préférences utilisateur',
        title: 'Personnalisation des paramètres'
      }
    }
  }
} satisfies Dictionary
