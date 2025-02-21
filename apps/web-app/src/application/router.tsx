import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyComponent } from '@/application/utils'
import { ROUTES } from '@/domain/navigation'
import { RequireAuthenticated, RequireUnauthenticated } from '@/presentation/guards'
import { NotFoundPage } from '@/presentation/pages'

const AccountPage = lazyComponent(() => import('@/presentation/pages/auth/AccountPage'))
const LoginPage = lazyComponent(() => import('@/presentation/pages/auth/LoginPage'))
const LogoutPage = lazyComponent(() => import('@/presentation/pages/auth/LogoutPage'))
const RegisterPage = lazyComponent(() => import('@/presentation/pages/auth/RegisterPage'))
const HomePage = lazyComponent(() => import('@/presentation/pages/home/HomePage'))
const SettingsPage = lazyComponent(() => import('@/presentation/pages/settings/SettingsPage'))
const UserProfilePage = lazyComponent(() => import('@/presentation/pages/user-profile/UserProfilePage'))

const CATCH_ROUTE = '*'

export const Router: FC = () => (
  <Routes>
    <Route element={<HomePage />} index path={ROUTES.home} />
    <Route element={<SettingsPage />} path={ROUTES.settings} />

    <Route element={<RequireAuthenticated />}>
      <Route element={<AccountPage />} path={ROUTES.account} />
      <Route element={<LogoutPage />} path={ROUTES.logout} />
    </Route>

    <Route element={<RequireUnauthenticated />}>
      <Route element={<LoginPage />} path={ROUTES.login} />
      <Route element={<RegisterPage />} path={ROUTES.register} />
    </Route>

    <Route element={<UserProfilePage />} path={ROUTES.userProfile} />

    <Route element={<Navigate to={CATCH_ROUTE} />} path={ROUTES.notFound} />
    <Route element={<NotFoundPage />} path={CATCH_ROUTE} />
  </Routes>
)
