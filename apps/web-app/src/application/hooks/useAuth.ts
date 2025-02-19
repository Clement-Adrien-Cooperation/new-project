import { useRequiredContext } from '@/application/utils'
import { AuthContext } from '@/presentation/providers'

export const useAuth = () => useRequiredContext(AuthContext, 'Auth')
