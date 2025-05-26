import { IUserAchievementsRepository } from "../repositories/user-achievements-repository";
import NotFoundError from "../utils/errors/not-found";

export class UserAchievementServices {
    constructor (private userAchievementRepository: IUserAchievementsRepository) {}

    async listUserAchievements(userId: string) {
        return this.userAchievementRepository.getUserAchievements(userId);
    }
    
    async createUserAchievement(userId: string, achievementId: string) {
        return this.userAchievementRepository.createUserAchievement(userId, achievementId);
    }

    async deleteUserAchievement(userId: string, achievementId: string) {
        const userAchievement = await this.userAchievementRepository.getUserAchievement(userId, achievementId);

        if (!userAchievement) {
            throw new NotFoundError();
        }

        return this.userAchievementRepository.deleteUserAchievement(userId, achievementId);
    }
}