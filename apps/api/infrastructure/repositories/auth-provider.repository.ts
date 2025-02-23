import { Injectable, NotImplementedException } from "@nestjs/common";
import { AuthProvider } from "infrastructure/auth/auth-provider.model";

@Injectable()
export class AuthProviderRepository {
	async save(authProvider: AuthProvider): Promise<void> {
		throw new NotImplementedException();
	}
}
