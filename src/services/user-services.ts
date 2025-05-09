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

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new NotFoundError();
        }

        return user;
    }

    async createUser(data: { name: string; email: string; password: string }) {
        const user = await this.userRepository.create(data);

        return user;
    }
}