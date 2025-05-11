
```
new-project
├─ .editorconfig
├─ apps
│  ├─ api
│  │  ├─ adapters
│  │  ├─ app.module.ts
│  │  ├─ application
│  │  │  └─ use-cases
│  │  ├─ config
│  │  ├─ core
│  │  │  ├─ decorators
│  │  │  ├─ fitlers
│  │  │  ├─ interceptors
│  │  │  └─ middleware
│  │  ├─ domain
│  │  ├─ infrastructure
│  │  ├─ main.ts
│  │  ├─ modules
│  │  ├─ nest-cli.json
│  │  ├─ package.json
│  │  ├─ README.md
│  │  ├─ test
│  │  │  ├─ e2e
│  │  │  │  ├─ app.e2e-spec.ts
│  │  │  │  └─ jest-e2e.json
│  │  │  └─ unit
│  │  ├─ tsconfig.build.json
│  │  └─ tsconfig.json
│  └─ web-app
│     ├─ .storybook
│     │  ├─ main.ts
│     │  ├─ preview.ts
│     │  └─ vite.config.ts
│     ├─ eslint.config.js
│     ├─ index.html
│     ├─ package.json
│     ├─ public
│     │  └─ manifest.webmanifest
│     ├─ src
│     │  ├─ App.tsx
│     │  ├─ application
│     │  │  ├─ hooks
│     │  │  │  ├─ index.ts
│     │  │  │  ├─ useAuth.ts
│     │  │  │  ├─ useI18n.ts
│     │  │  │  ├─ useParams.ts
│     │  │  │  └─ useTheme.ts
│     │  │  ├─ router.tsx
│     │  │  ├─ services
│     │  │  │  ├─ AuthService.ts
│     │  │  │  ├─ I18nService.ts
│     │  │  │  ├─ index.ts
│     │  │  │  └─ ThemeService.ts
│     │  │  └─ utils
│     │  │     ├─ contextUtils.ts
│     │  │     ├─ index.ts
│     │  │     └─ lazy.tsx
│     │  ├─ domain
│     │  │  ├─ auth.ts
│     │  │  ├─ i18n.ts
│     │  │  ├─ metadata.ts
│     │  │  ├─ navigation.ts
│     │  │  └─ theme.ts
│     │  ├─ infrastructure
│     │  │  ├─ api
│     │  │  │  ├─ authApi.ts
│     │  │  │  └─ index.ts
│     │  │  ├─ i18n
│     │  │  │  ├─ dictionaries
│     │  │  │  │  ├─ en.ts
│     │  │  │  │  ├─ fr.ts
│     │  │  │  │  └─ index.ts
│     │  │  │  ├─ index.ts
│     │  │  │  ├─ polyglot.d.ts
│     │  │  │  └─ polyglot.js
│     │  │  ├─ repositories
│     │  │  │  ├─ AuthRepository.ts
│     │  │  │  ├─ I18nRepository.ts
│     │  │  │  ├─ index.ts
│     │  │  │  └─ ThemeRepository.ts
│     │  │  ├─ storage
│     │  │  │  ├─ index.ts
│     │  │  │  └─ localStorage.ts
│     │  │  └─ utils
│     │  │     ├─ index.ts
│     │  │     ├─ object.ts
│     │  │     └─ sort.ts
│     │  ├─ main.tsx
│     │  └─ presentation
│     │     ├─ components
│     │     │  ├─ auth
│     │     │  │  ├─ AuthContext.ts
│     │     │  │  ├─ AuthProvider.tsx
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ LoginForm.tsx
│     │     │  │  ├─ LoginForm.validation.ts
│     │     │  │  ├─ RegisterForm.tsx
│     │     │  │  └─ RegisterForm.validation.ts
│     │     │  ├─ forms
│     │     │  │  ├─ Checkbox
│     │     │  │  │  ├─ Checkbox.stories.tsx
│     │     │  │  │  ├─ Checkbox.styles.sass
│     │     │  │  │  ├─ Checkbox.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ DatePicker
│     │     │  │  │  ├─ DatePicker.stories.tsx
│     │     │  │  │  ├─ DatePicker.styles.sass
│     │     │  │  │  ├─ DatePicker.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ FieldError
│     │     │  │  │  ├─ FieldError.styles.sass
│     │     │  │  │  ├─ FieldError.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ fields
│     │     │  │  │  ├─ EmailField.tsx
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ PasswordsValidationFields.styles.sass
│     │     │  │  │  ├─ PasswordsValidationFields.tsx
│     │     │  │  │  ├─ RememberMeCheckbox.styles.sass
│     │     │  │  │  ├─ RememberMeCheckbox.tsx
│     │     │  │  │  ├─ UserNameField.tsx
│     │     │  │  │  ├─ UserPasswordField.tsx
│     │     │  │  │  └─ ValidUserNameField.tsx
│     │     │  │  ├─ FieldSet
│     │     │  │  │  ├─ FieldSet.styles.sass
│     │     │  │  │  ├─ FieldSet.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ Form
│     │     │  │  │  ├─ Form.styles.sass
│     │     │  │  │  ├─ Form.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ FormErrors
│     │     │  │  │  ├─ FormErrors.styles.sass
│     │     │  │  │  ├─ FormErrors.tsx
│     │     │  │  │  └─ index.ts
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ PasswordField
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ PasswordField.stories.tsx
│     │     │  │  │  ├─ PasswordField.styles.sass
│     │     │  │  │  └─ PasswordField.tsx
│     │     │  │  ├─ RequiredFieldsMessage
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ RequiredFieldsMessage.styles.sass
│     │     │  │  │  └─ RequiredFieldsMessage.tsx
│     │     │  │  ├─ Select
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ Select.stories.tsx
│     │     │  │  │  ├─ Select.styles.sass
│     │     │  │  │  └─ Select.tsx
│     │     │  │  ├─ SubmitButton
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ SubmitButton.styles.sass
│     │     │  │  │  └─ SubmitButton.tsx
│     │     │  │  ├─ Switch
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ Switch.stories.tsx
│     │     │  │  │  ├─ Switch.styles.sass
│     │     │  │  │  └─ Switch.tsx
│     │     │  │  └─ TextField
│     │     │  │     ├─ index.ts
│     │     │  │     ├─ TextField.stories.tsx
│     │     │  │     ├─ TextField.styles.sass
│     │     │  │     └─ TextField.tsx
│     │     │  ├─ i18n
│     │     │  │  ├─ I18nContext.ts
│     │     │  │  ├─ I18nProvider.tsx
│     │     │  │  ├─ index.ts
│     │     │  │  └─ LocaleSwitcher.tsx
│     │     │  ├─ index.ts
│     │     │  ├─ layout
│     │     │  │  ├─ AppLayout.tsx
│     │     │  │  ├─ Error.styles.sass
│     │     │  │  ├─ Error.tsx
│     │     │  │  ├─ ErrorBoundary.tsx
│     │     │  │  ├─ Footer.styles.sass
│     │     │  │  ├─ Footer.tsx
│     │     │  │  ├─ Header.styles.sass
│     │     │  │  ├─ Header.tsx
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ Main.styles.sass
│     │     │  │  ├─ Main.tsx
│     │     │  │  ├─ NavBar.styles.sass
│     │     │  │  ├─ NavBar.tsx
│     │     │  │  └─ Providers.tsx
│     │     │  ├─ theme
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ ThemeContext.ts
│     │     │  │  ├─ ThemeProvider.tsx
│     │     │  │  └─ ThemeSwitcher.tsx
│     │     │  └─ ui
│     │     │     ├─ Calendar
│     │     │     │  ├─ Calendar.styles.sass
│     │     │     │  ├─ Calendar.tsx
│     │     │     │  └─ index.ts
│     │     │     ├─ Fallback.tsx
│     │     │     ├─ index.ts
│     │     │     ├─ Label
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Label.styles.sass
│     │     │     │  └─ Label.tsx
│     │     │     ├─ List
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ List.tsx
│     │     │     │  ├─ ListElem.styles.sass
│     │     │     │  └─ ListElem.tsx
│     │     │     ├─ Loader
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Loader.styles.sass
│     │     │     │  ├─ Loader.tsx
│     │     │     │  ├─ Spinner.styles.sass
│     │     │     │  └─ Spinner.tsx
│     │     │     ├─ Menu
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Menu.stories.tsx
│     │     │     │  ├─ Menu.styles.sass
│     │     │     │  ├─ Menu.tsx
│     │     │     │  ├─ MenuElem.styles.sass
│     │     │     │  └─ MenuElem.tsx
│     │     │     ├─ Option
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Option.styles.sass
│     │     │     │  └─ Option.tsx
│     │     │     ├─ PageTitle
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ PageTitle.styles.sass
│     │     │     │  └─ PageTitle.tsx
│     │     │     ├─ Pressable
│     │     │     │  ├─ Button.stories.tsx
│     │     │     │  ├─ Button.tsx
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Link.stories.tsx
│     │     │     │  ├─ Link.tsx
│     │     │     │  ├─ Pressable.styles.sass
│     │     │     │  └─ Pressable.ts
│     │     │     ├─ Separator
│     │     │     │  ├─ index.ts
│     │     │     │  ├─ Separator.styles.sass
│     │     │     │  └─ Separator.tsx
│     │     │     ├─ Text
│     │     │     │  ├─ index.ts
│     │     │     │  └─ Text.tsx
│     │     │     └─ Tooltip
│     │     │        ├─ index.ts
│     │     │        ├─ Tooltip.stories.tsx
│     │     │        ├─ Tooltip.styles.sass
│     │     │        └─ Tooltip.tsx
│     │     ├─ guards
│     │     │  ├─ index.ts
│     │     │  ├─ RequireAuthenticated.tsx
│     │     │  └─ RequireUnauthenticated.tsx
│     │     ├─ pages
│     │     │  ├─ auth
│     │     │  │  ├─ AccountPage.metadata.tsx
│     │     │  │  ├─ AccountPage.tsx
│     │     │  │  ├─ LoginPage.metadata.tsx
│     │     │  │  ├─ LoginPage.styles.sass
│     │     │  │  ├─ LoginPage.tsx
│     │     │  │  ├─ LogoutPage.metadata.tsx
│     │     │  │  ├─ LogoutPage.styles.sass
│     │     │  │  ├─ LogoutPage.tsx
│     │     │  │  ├─ RegisterPage.metadata.tsx
│     │     │  │  ├─ RegisterPage.styles.sass
│     │     │  │  └─ RegisterPage.tsx
│     │     │  ├─ home
│     │     │  │  ├─ HomePage.metadata.tsx
│     │     │  │  ├─ HomePage.styles.sass
│     │     │  │  └─ HomePage.tsx
│     │     │  ├─ index.ts
│     │     │  ├─ not-found
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ NotFoundPage.metadata.tsx
│     │     │  │  ├─ NotFoundPage.styles.sass
│     │     │  │  └─ NotFoundPage.tsx
│     │     │  ├─ PageMetadata.tsx
│     │     │  ├─ settings
│     │     │  │  ├─ SettingsPage.metadata.tsx
│     │     │  │  ├─ SettingsPage.styles.sass
│     │     │  │  └─ SettingsPage.tsx
│     │     │  └─ user-profile
│     │     │     ├─ UserProfilePage.metadata.tsx
│     │     │     └─ UserProfilePage.tsx
│     │     ├─ styles
│     │     │  ├─ base.sass
│     │     │  ├─ normalize.css
│     │     │  ├─ _accessibility.sass
│     │     │  ├─ _animations.sass
│     │     │  ├─ _breakpoints.sass
│     │     │  ├─ _colors.sass
│     │     │  ├─ _forms.sass
│     │     │  ├─ _interactive.sass
│     │     │  ├─ _layout.sass
│     │     │  ├─ _pressable.sass
│     │     │  ├─ _scrollbar.sass
│     │     │  ├─ _selectors.sass
│     │     │  ├─ _shadows.sass
│     │     │  ├─ _sizes.sass
│     │     │  └─ _typography.sass
│     │     ├─ types
│     │     │  ├─ index.ts
│     │     │  └─ ui.ts
│     │     └─ utils
│     │        ├─ classNames.ts
│     │        ├─ index.ts
│     │        └─ reactAria.ts
│     ├─ tsconfig.app.json
│     ├─ tsconfig.json
│     ├─ tsconfig.node.json
│     └─ vite.config.ts
├─ eslint.config.js
├─ package.json
├─ packages
│  └─ shared-types
│     ├─ package.json
│     ├─ src
│     │  ├─ auth
│     │  │  ├─ auth.errors.ts
│     │  │  ├─ auth.rules.ts
│     │  │  ├─ auth.schema.ts
│     │  │  ├─ auth.validation.ts
│     │  │  └─ index.ts
│     │  ├─ dto.ts
│     │  ├─ result.ts
│     │  └─ utils.ts
│     └─ tsconfig.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
└─ tsconfig.json

```