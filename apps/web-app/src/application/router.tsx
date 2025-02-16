import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyPage } from '@/application/utils'
import { ROUTES } from '@/domain/navigation'
import { NotFoundPage } from '@/presentation/pages'
import { RequireAuthenticated, RequireUnauthenticated } from '@/presentation/guards'

const HomePage = lazyPage(() => import('@/presentation/pages/home/HomePage'))
const LoginPage = lazyPage(() => import('@/presentation/pages/auth/LoginPage'))
const LogoutPage = lazyPage(() => import('@/presentation/pages/auth/LogoutPage'))
const RegisterPage = lazyPage(() => import('@/presentation/pages/auth/RegisterPage'))
const SettingsPage = lazyPage(() => import('@/presentation/pages/settings/SettingsPage'))

export const Router: FC = () => (
  <Routes>
    <Route element={<HomePage />} path={ROUTES.home} />
    <Route element={<SettingsPage />} path={ROUTES.settings} />

    <Route element={<RequireAuthenticated />}>
      <Route element={<LogoutPage />} path={ROUTES.logout} />
    </Route>

    <Route element={<RequireUnauthenticated />}>
      <Route element={<LoginPage />} path={ROUTES.login} />
      <Route element={<RegisterPage />} path={ROUTES.register} />
    </Route>

    <Route element={<Navigate to='*' />} path={ROUTES.notFound} />
    <Route element={<NotFoundPage />} path='*' />
  </Routes>
)
