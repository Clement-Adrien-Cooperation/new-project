import { ROUTE_SETTINGS } from '@/domain/navigation'
import { Link } from '@/presentation/components'
import { SettingsIcon } from 'lucide-react'
import type { FC } from 'react'

const HomePage: FC = () => (
  <>
    <h1>Home</h1>

    <Link
      href={ROUTE_SETTINGS}
      Icon={<SettingsIcon />}
      variant='outlined'
    />
  </>
)

export default HomePage
