import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyComponent } from '@/application/utils'
import { ROUTES } from '@/domain/navigation'
import { NotFoundPage } from '@/presentation/pages'
import { RequireAuthenticated, RequireUnauthenticated } from '@/presentation/guards'

const HomePage = lazyComponent(() => import('@/presentation/pages/home/HomePage'))
const LoginPage = lazyComponent(() => import('@/presentation/pages/auth/LoginPage'))
const LogoutPage = lazyComponent(() => import('@/presentation/pages/auth/LogoutPage'))
const RegisterPage = lazyComponent(() => import('@/presentation/pages/auth/RegisterPage'))
const SettingsPage = lazyComponent(() => import('@/presentation/pages/settings/SettingsPage'))

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
