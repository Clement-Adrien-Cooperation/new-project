import { useRequiredContext } from '@/application/utils'
import { AuthenticationContext } from '@/presentation/providers'

export const useAuthentication = () => useRequiredContext(AuthenticationContext, 'Authentication')
