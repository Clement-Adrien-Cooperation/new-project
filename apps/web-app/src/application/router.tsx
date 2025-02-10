import { Navigate, Route, Routes } from 'react-router'

import { lazyPage } from '@/application/utils'
import { ROUTE_HOME, ROUTE_NOT_FOUND, ROUTE_SETTINGS } from '@/domain/navigation'
import { NotFoundPage } from '@/presentation/pages'

const HomePage = lazyPage(() => import('@/presentation/pages/HomePage'))
const SettingsPage = lazyPage(() => import('@/presentation/pages/SettingsPage'))

export const Router: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path={ROUTE_HOME} />
    <Route element={<SettingsPage />} path={ROUTE_SETTINGS} />

    <Route element={<Navigate to='*' />} path={ROUTE_NOT_FOUND} />
    <Route element={<NotFoundPage />} path='*' />
  </Routes>
)
