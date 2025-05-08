import { IUserRepository } from "../repositories/users-repository.js";

export class UserService {
    constructor(private userRepository: IUserRepository){};

    async getUserById(id: string) {
        return this.userRepository.findById(id);
    }
}