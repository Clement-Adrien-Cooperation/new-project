import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthProviderService {
  private static readonly SALT_ROUNDS = 10

  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, AuthProviderService.SALT_ROUNDS)
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }
}
