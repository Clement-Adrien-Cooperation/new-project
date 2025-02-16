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
        rememberMeCheckboxLabel: 'Remember me',
        userName: {
          label: 'Username',
          placeholder: 'Enter your username'
        },
        userPassword: {
          label: 'Password',
          placeholder: 'Enter your password'
        }
      },
      loginForm: {
        submit: 'Login'
      },
      passwordField: {
        label: 'Password',
        placeholder: 'Enter your password'
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
  layouts: {
    navBar: {
      home: 'Home',
      login: 'Login',
      logout: 'Logout',
      settings: 'Settings'
    }
  },
  pages: {
    auth: {
      login: {
        metadata: {
          category: 'Authentication and Security',
          classification: 'Login and Account Management',
          description: 'Log in to access your account and organize game nights with your friends.',
          keywords: 'login, authentication, account, password, security, access',
          title: 'Login to Your Account'
        },
        registerLink: 'Don\'t have an account? Register now.',
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
    }
  }
}
