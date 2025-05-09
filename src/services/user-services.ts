import { IUserRepository } from "../repositories/users-repository";
import NotFoundError from "../utils/errors/not-found";

export class UserService {
    constructor(private userRepository: IUserRepository){};

    async getUserById(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new NotFoundError();
        }

        return user;
    }
}