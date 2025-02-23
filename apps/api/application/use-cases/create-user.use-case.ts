import { User } from "domain/entities/user.entities";
import { AuthProvider } from "infrastructure/auth/auth-provider.model";
import { UserRepository } from "infrastructure/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, username: string, provider: 'local' | 'google' | 'facebook', password?: string, providerId?: string) {
    if (provider !== 'local' && !providerId) {
      throw new Error("OAuth registration requires providerId");
    }

    const user = new User(email, username)
    const userDto = await this.userRepository.save(user)

    if (provider === 'local') {
      AuthProvider.createLocal(userDto.id, password!)
    } else {
      AuthProvider.createOAuth(userDto.id, provider, providerId!)
    }

    return userDto
  }
}
