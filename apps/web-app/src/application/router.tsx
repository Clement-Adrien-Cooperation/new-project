import { Route, Routes } from 'react-router'

import { lazyPage } from '@/application/utils'
import { ROUTE_HOME, ROUTE_SETTINGS } from '@/domain/navigation'

const HomePage = lazyPage(() => import('@/presentation/pages/Home'))
const SettingsPage = lazyPage(() => import('@/presentation/pages/Settings'))

export const Router: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path={ROUTE_HOME}/>
    <Route element={<SettingsPage />} path={ROUTE_SETTINGS}/>
  </Routes>
)
