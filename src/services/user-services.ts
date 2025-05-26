import { comparePassword, encryptPassword } from "../utils/crypto";
import { IUserRepository } from "../repositories/users-repository";
import InvalidCredentialsError from "../utils/errors/invalid-credentials";
import NotFoundError from "../utils/errors/not-found";
import UserAlreadyExistsError from "../utils/errors/user-already-exists";
import BadRequestError from "../utils/errors/bad-request-error";

export class UserService {
    constructor(private userRepository: IUserRepository) {}

    async getUserById(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new NotFoundError();
        }

        return user;
    }

    async getUserByUsername(username: string) {
        const user = await this.userRepository.findByUsername(username);

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

        const isPasswordCorrect = await comparePassword(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            throw new InvalidCredentialsError();
        }

        return user;
    }

    async createUser(data: { name: string; email: string; password: string, username: string }) {
        const existingUser = await this.userRepository.findByEmail(data.email);

        if (existingUser) {
            throw new UserAlreadyExistsError();
        }

        const existingUsername = await this.userRepository.findByUsername(data.username);

        if (existingUsername) {
            throw new UserAlreadyExistsError();
        }

        const hashedPassword = await encryptPassword(data.password);

        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword,
        });

        return user;
    }

    async updateUserProfile(
        id: string,
        data: { name?: string; profilePictureId?: string, username?: string }
    ) {
        if (!data.name && !data.profilePictureId && !data.username) {
            throw new BadRequestError();
        }

        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new NotFoundError();
        }

        const updatedUser = await this.userRepository.update(id, data);

        // TODO: Uncomment this when the profile picture feature is implemented
        // if (data.profilePictureId) {
        //     const exists = await prisma.profilePicture.findUnique({
        //         where: { id: data.profilePictureId },
        //     });

        //     if (!exists) {
        //         throw new Error("profilePictureId inválido");
        //     }
        // }

        return updatedUser;
    }

    async deleteUser(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new NotFoundError();
        }

        const deletedUser = await this.userRepository.delete(id);

        return deletedUser;
    }

    async listRanking(amount: number, userId?: string) {
        const users = await this.userRepository.getTopUsersByWeeklyXP(amount);

        if (!userId) {
            return users;
        }

        const user = await this.userRepository.getUserRankingPosition(userId);
        
        return [...users, user];
    }
}
