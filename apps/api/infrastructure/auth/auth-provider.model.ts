import { AuthProviderService } from "./auth-provider.service"

export class AuthProvider {
  private constructor(
    public readonly userId: string,
    public readonly provider: 'local' | 'google' | 'facebook',
    public readonly providerId?: string,
    public readonly passwordHash?: string
  ) {}

  static async createLocal(userId: string, password: string): Promise<AuthProvider> {
    const hashedPassword = await AuthProviderService.hashPassword(password)
    return new AuthProvider(userId, 'local', undefined, hashedPassword)
  }

  static createOAuth(userId: string, provider: 'google' | 'facebook', providerId: string): AuthProvider {
    return new AuthProvider(userId, provider, providerId)
  }
}
