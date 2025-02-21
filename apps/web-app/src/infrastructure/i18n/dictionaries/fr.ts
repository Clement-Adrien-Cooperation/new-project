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
          errors: {
            invalid: 'Cette adresse email est invalide.'
          },
          label: 'Adresse mail',
          placeholder: 'Entrez votre email'
        },
        passwordsValidation: {
          errors: {
            passwordsDonTMatch: 'Les mots de passe ne correspondent pas.'
          },
          confirmPasswordLabel: 'Confirmer le mot de passe',
          confirmPasswordPlaceholder: 'Retapez votre mot de passe'
        },
        rememberMeCheckboxLabel: 'Se souvenir de moi',
        userName: {
          label: 'Nom d\'utilisateur',
          placeholder: 'Entrez votre nom d\'utilisateur'
        },
        userPassword: {
          errors: {
            requireNumber: 'Le mot de passe doit contenir au moins un chiffre.',
            requireSpecialCharacter: 'Le mot de passe doit contenir au moins un caractère spécial.',
            tooLong: 'Le mot de passe doit contenir au maximum %{smart_count} caractère. |||| Le mot de passe doit contenir au maximum %{smart_count} caractères.',
            tooShort: 'Le mot de passe doit contenir au minimum %{smart_count} caractère. |||| Le mot de passe doit contenir au minimum %{smart_count} caractères.'
          },
          label: 'Mot de passe',
          placeholder: 'Entrez votre mot de passe'
        },
        validUserName: {
          errors: {
            invalidCharacters: 'Le nom d\'utilisateur ne peut contenir que des lettres, des chiffres, des tirets et des underscores.',
            noSpaces: 'Le nom d\'utilisateur ne peut pas contenir d\'espaces.',
            tooLong: 'Le nom d\'utilisateur doit contenir au maximum %{smart_count} caractère. |||| Le nom d\'utilisateur doit contenir au maximum %{smart_count} caractères.',
            tooShort: 'Le nom d\'utilisateur doit contenir au minimum %{smart_count} caractère. |||| Le nom d\'utilisateur doit contenir au minimum %{smart_count} caractères.'
          }
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
        errors: {
          emailAlreadyExists: 'Cette adresse email est déjà utilisée. Veuillez en choisir une autre.',
          usernameAlreadyExists: 'Ce nom d\'utilisateur est déjà utilisé. Veuillez en choisir un autre.'
        },
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
    badRequest: 'La requête est incorrecte. Veuillez vérifier les données envoyées.',
    unexpected: 'Il y a eu une erreur imprévue. Veuillez réessayer plus tard.'
  },
  layouts: {
    navBar: {
      home: 'Accueil',
      login: 'Connexion',
      logout: 'Déconnexion',
      profile: 'Profil',
      settings: 'Paramètres'
    }
  },
  pages: {
    auth: {
      account: {
        metadata: {
          category: 'Profil et Informations Utilisateur',
          classification: 'Données Personnelles et Paramètres',
          description: 'Consultez et mettez à jour vos informations personnelles sur votre profil.',
          keywords: 'profil, utilisateur, informations, paramètres, avatar, identité',
          title: 'Mon Profil'
        },
        title: 'Mon profil'
      },
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
      goBack: 'Revenir à la page d\'accueil',
      message: 'La page que vous cherchez n\'existe pas.',
      metadata: {
        category: 'Erreur et Navigation',
        classification: 'Expérience Utilisateur et Accès',
        description: 'La page que vous recherchez est introuvable. Vérifiez l\'URL ou retournez à l\'accueil.',
        keywords: 'erreur 404, page introuvable, lien cassé, page non trouvée, erreur',
        title: 'Page introuvable'
      },
      title: 'Page introuvable'
    },
    settings: {
      metadata: {
        category: 'Personnalisation et Accessibilité',
        classification: 'Expérience Utilisateur et Paramètres',
        description: 'Personnalisez votre expérience en changeant le thème de l\'application et la langue d\'affichage.',
        keywords: 'paramètres, personnalisation, thème, mode sombre, langue, accessibilité, préférences utilisateur',
        title: 'Personnalisation des paramètres'
      },
      title: 'Paramètres'
    },
    userProfile: {
      metadata: {
        category: 'Profil et Informations Utilisateur',
        classification: 'Données Personnelles et Paramètres',
        description: 'Consultez et mettez à jour les informations de votre profil utilisateur.',
        keywords: 'profil, utilisateur, informations, paramètres, avatar, identité'
      },
      title: 'Profil de %{userName}',
      userNameFallback: 'Utilisateur'
    }
  }
} satisfies Dictionary
