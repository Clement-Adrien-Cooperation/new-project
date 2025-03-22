import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyComponent } from '@/application/utils'
import { ROUTES } from '@/domain/navigation'
import { RequireAuthenticated, RequireUnauthenticated } from '@/presentation/guards'
import { NotFoundPage } from '@/presentation/pages'

const AccountPage = lazyComponent(() => import('@/presentation/pages/auth/AccountPage'), 'Account Page')
const LoginPage = lazyComponent(() => import('@/presentation/pages/auth/LoginPage'), 'Login Page')
const LogoutPage = lazyComponent(() => import('@/presentation/pages/auth/LogoutPage'), 'Logout Page')
const RegisterPage = lazyComponent(() => import('@/presentation/pages/auth/RegisterPage'), 'Register Page')
const HomePage = lazyComponent(() => import('@/presentation/pages/home/HomePage'), 'Home Page')
const SettingsPage = lazyComponent(() => import('@/presentation/pages/settings/SettingsPage'), 'Settings Page')
const UserProfilePage = lazyComponent(() => import('@/presentation/pages/user-profile/UserProfilePage'), 'User Profile Page')

const CATCH_ROUTE = '*'

export const Router: FC = () => (
  <Routes>
    <Route element={<HomePage />} index path={ROUTES.home} />
    <Route element={<SettingsPage />} path={ROUTES.settings} />
    <Route element={<UserProfilePage />} path={ROUTES.userProfile} />

    <Route element={<RequireAuthenticated />}>
      <Route element={<AccountPage />} path={ROUTES.account} />
      <Route element={<LogoutPage />} path={ROUTES.logout} />
    </Route>

    <Route element={<RequireUnauthenticated />}>
      <Route element={<LoginPage />} path={ROUTES.login} />
      <Route element={<RegisterPage />} path={ROUTES.register} />
    </Route>

    <Route element={<Navigate to={CATCH_ROUTE} />} path={ROUTES.notFound} />
    <Route element={<NotFoundPage />} path={CATCH_ROUTE} />
  </Routes>
)
