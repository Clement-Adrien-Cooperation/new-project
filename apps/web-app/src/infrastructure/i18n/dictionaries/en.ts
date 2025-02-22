export const en = {
  appName: 'New project',
  components: {
    fallback: {
      message: 'An unexpected error occurred. Please try again later.',
      retry: 'Reload',
      title: 'Oops, something went wrong'
    },
    forms: {
      fields: {
        email: {
          errors: {
            invalid: 'This email address is invalid.'
          },
          label: 'Email',
          placeholder: 'Enter your email'
        },
        passwordsValidation: {
          errors: {
            passwordsDonTMatch: 'The passwords do not match.'
          },
          confirmPasswordLabel: 'Confirm password',
          confirmPasswordPlaceholder: 'Re-enter your password'
        },
        rememberMeCheckboxLabel: 'Remember me',
        userName: {
          label: 'Username',
          placeholder: 'Enter your username'
        },
        userPassword: {
          errors: {
            requireNumber: 'The password must contain at least one number.',
            requireSpecialCharacter: 'The password must contain at least one special character.',
            tooLong: 'The password must contain at most %{smart_count} character. |||| The password must contain at most %{smart_count} characters.',
            tooShort: 'The password must contain at least %{smart_count} character. |||| The password must contain at least %{smart_count} characters.'
          },
          label: 'Password',
          placeholder: 'Enter your password'
        },
        validUserName: {
          errors: {
            invalidCharacters: 'The username can only contain letters, numbers, dashes, and underscores.',
            noSpaces: 'The username cannot contain spaces.',
            tooLong: 'The username must contain at most %{smart_count} character. |||| The username must contain at most %{smart_count} characters.',
            tooShort: 'The username must contain at least %{smart_count} character. |||| The username must contain at least %{smart_count} characters.'
          }
        }
      },
      loginForm: {
        errors: {
          invalidCredentials: 'The provided credentials are incorrect. Please try again.'
        },
        submit: 'Login',
        userNameOrEmail: {
          label: 'Username or email',
          placeholder: 'Enter your username or email'
        }
      },
      passwordField: {
        label: 'Password',
        placeholder: 'Enter your password'
      },
      registerForm: {
        errors: {
          emailAlreadyExists: 'This email address is already in use. Please choose another one.',
          usernameAlreadyExists: 'This username is already in use. Please choose another one.'
        },
        submit: 'Register'
      },
      requiredFieldsMessage: 'Fields marked with * are required.'
    },
    localeSwitcher: {
      label: 'Language'
    },
    themeSwitcher: {
      dark: 'Dark',
      label: 'Theme',
      light: 'Light',
      system: 'System'
    }
  },
  errors: {
    badRequest: 'Bad request: Please fill in all required fields.',
    unexpected: 'An unexpected error occurred. Please try again later.'
  },
  layouts: {
    navBar: {
      home: 'Home',
      login: 'Login',
      logout: 'Logout',
      profile: 'Profile',
      settings: 'Settings'
    }
  },
  pages: {
    auth: {
      account: {
        metadata: {
          category: 'Profile and User Information',
          classification: 'Personal Data and Settings',
          description: 'View and update your personal information on your profile.',
          keywords: 'profile, user, information, settings, avatar, identity',
          title: 'My Profile'
        },
        title: 'My profile'
      },
      login: {
        metadata: {
          category: 'Authentication and Security',
          classification: 'Login and Account Management',
          description: 'Log in to access your account and organize game nights with your friends.',
          keywords: 'login, authentication, account, password, security, access',
          title: 'Login to Your Account'
        },
        register: {
          link: 'Register now.',
          message: 'Don\'t have an account?'
        },
        title: 'Login'
      },
      logout: {
        buttonLabel: 'Yes, logout',
        metadata: {
          category: 'Authentication and Security',
          classification: 'Logout and Account Management',
          description: 'You are logging out of your account. Come back anytime to organize your game nights.',
          keywords: 'logout, sign out, security, account, exit, session',
          title: 'Logging Out'
        },
        subtitle: 'Are you sure you want to log out?',
        title: 'Logout'
      },
      register: {
        login: {
          link: 'Log in.',
          message: 'Already have an account?'
        },
        metadata: {
          category: 'Authentication and Security',
          classification: 'Account Creation and Registration',
          description: 'Create an account to organize game nights and invite your friends to join your groups.',
          keywords: 'registration, create account, new account, join, authentication',
          title: 'Create an Account'
        },
        title: 'Register'
      }
    },
    home: {
      metadata: {
        category: 'Game Night Organization',
        classification: 'Entertainment and Social Networking',
        description: 'Plan game nights with your friends based on everyone\'s availability.',
        keywords: 'game nights, planning, friends, group, calendar, schedule, board games, online games',
        title: 'Game Night Organizer'
      }
    },
    notFound: {
      goBack: 'Go back',
      message: 'The page you are looking for does not exist.',
      metadata: {
        category: 'Error and Navigation',
        classification: 'User Experience and Access',
        description: 'The page you are looking for cannot be found. Check the URL or return to the homepage.',
        keywords: 'error 404, page not found, broken link, missing page, error',
        title: 'Page Not Found'
      },
      title: 'Not found'
    },
    settings: {
      title: 'Settings',
      metadata: {
        category: 'Customization and Accessibility',
        classification: 'User Experience and Settings',
        description: 'Customize your experience by changing the app theme and display language.',
        keywords: 'settings, customization, theme, dark mode, language, accessibility, user preferences',
        title: 'Settings Customization'
      }
    },
    userProfile: {
      metadata: {
        category: 'Profile and User Information',
        classification: 'Personal Data and Settings',
        description: 'View and update the profile of %{userName}.',
        keywords: 'profile, user, information, settings, avatar, identity'
      },
      title: '%{userName} Profile',
      userNameFallback: 'User'
    }
  }
}
