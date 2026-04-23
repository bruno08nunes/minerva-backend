import { UserAchievement } from "@prisma/client";

export interface IUserAchievementsRepository {
    getUserAchievement(
        userId: string,
        achievementId: string
    ): Promise<UserAchievement | null>;
    getUserAchievements(userId: string): Promise<UserAchievement[]>;
    createUserAchievement(userId: string, achievementId: string): Promise<UserAchievement>;
    deleteUserAchievement(userId: string, achievementId: string): Promise<UserAchievement>;
}