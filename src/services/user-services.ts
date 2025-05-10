import { comparePassword, encryptPassword } from "../lib/crypto";
import { IUserRepository } from "../repositories/users-repository";
import InvalidCredentialsError from "../utils/errors/invalid-credentials";
import NotFoundError from "../utils/errors/not-found";
import UserAlreadyExistsError from "../utils/errors/user-already-exists";

export class UserService {
    constructor(private userRepository: IUserRepository){};

    async getUserById(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new NotFoundError();
        }

        return user;
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const isPasswordCorrect = await comparePassword(password, user.password);

        if (!isPasswordCorrect) {
            throw new InvalidCredentialsError();
        }

        return user;
    }

    async createUser(data: { name: string; email: string; password: string }) {
        const existingUser = await this.userRepository.findByEmail(data.email);

        if (existingUser) {
            throw new UserAlreadyExistsError();
        }

        const hashedPassword = await encryptPassword(data.password);

        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword,
        });

        return user;
    }
}