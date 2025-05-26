import { User, Prisma, ProfilePicture } from "../generated/prisma";

type UserWithProfilePicture = User & {
    profilePicture: ProfilePicture | null;
};

export interface IUserRepository {
    findById(id: string): Promise<UserWithProfilePicture | null>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<UserWithProfilePicture | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<User>;
    getTopUsersByWeeklyXP(amount: number): Promise<Partial<User>[]>;
    getUserRankingPosition(id?: string): Promise<Partial<User> | null>;
}