import type { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { lazyPage } from '@/application/utils'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_LOGOUT, ROUTE_NOT_FOUND, ROUTE_SETTINGS } from '@/domain/navigation'
import { NotFoundPage } from '@/presentation/pages'
import { RequireAuthenticated, RequireUnauthenticated } from '@/presentation/guards'

const HomePage = lazyPage(() => import('@/presentation/pages/home/HomePage'))
const LoginPage = lazyPage(() => import('@/presentation/pages/auth/LoginPage'))
const LogoutPage = lazyPage(() => import('@/presentation/pages/auth/LogoutPage'))
const SettingsPage = lazyPage(() => import('@/presentation/pages/settings/SettingsPage'))

export const Router: FC = () => (
  <Routes>
    <Route element={<HomePage />} path={ROUTE_HOME} />
    <Route element={<SettingsPage />} path={ROUTE_SETTINGS} />

    <Route element={<RequireAuthenticated />}>
      <Route element={<LogoutPage />} path={ROUTE_LOGOUT} />
    </Route>

    <Route element={<RequireUnauthenticated />}>
      <Route element={<LoginPage />} path={ROUTE_LOGIN} />
    </Route>

    <Route element={<Navigate to='*' />} path={ROUTE_NOT_FOUND} />
    <Route element={<NotFoundPage />} path='*' />
  </Routes>
)
