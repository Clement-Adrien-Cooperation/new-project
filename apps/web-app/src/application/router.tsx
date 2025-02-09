import { Navigate, Route, Routes } from 'react-router'

import { lazyPage } from '@/application/utils'
import { ROUTE_HOME, ROUTE_NOT_FOUND, ROUTE_SETTINGS } from '@/domain/navigation'
import { NotFound } from '@/presentation/pages'

const HomePage = lazyPage(() => import('@/presentation/pages/Home'))
const SettingsPage = lazyPage(() => import('@/presentation/pages/Settings'))

export const Router: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path={ROUTE_HOME}/>
    <Route element={<SettingsPage />} path={ROUTE_SETTINGS}/>

    <Route path={ROUTE_NOT_FOUND} element={<Navigate to='*' />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
)
