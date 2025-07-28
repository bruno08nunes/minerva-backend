import { User, Prisma, ProfilePicture } from "../generated/prisma";

type CompleteUser = User & {
    profilePicture: ProfilePicture | null;
    isFollowing?: boolean;
};

export interface IUserRepository {
    findById(id: string): Promise<CompleteUser | null>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string, userId?: string): Promise<CompleteUser | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: string): Promise<User>;
    getTopUsersByWeeklyXP(amount: number): Promise<Partial<User>[]>;
    getUserRankingPosition(id?: string): Promise<Partial<User> | null>;
    incrementXp(id: string, amount: number): Promise<User | null>;
    updateStreak(id: string): Promise<User | null>;
    resetStreak(id: string): Promise<User | null>;
}