import { Injectable, NotImplementedException } from "@nestjs/common";
import { UserDTO } from "application/dto/user.dto";
import { User } from "domain/entities/user.entities";

@Injectable()
export class UserRepository {
  async save(user: User): Promise<UserDTO> {
		throw new NotImplementedException();
	}
}