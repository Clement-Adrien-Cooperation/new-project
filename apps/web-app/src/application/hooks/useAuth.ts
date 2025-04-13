import { useRequiredContext } from '@/application/utils'
import { AuthContext } from '@/presentation/components'

export const useAuth = () => useRequiredContext(AuthContext, 'Auth')
