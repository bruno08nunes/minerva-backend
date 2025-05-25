import { IAchievementsRepository, CreateAchievementType } from "../repositories/achievements-repository";
import NotFoundError from "../utils/errors/not-found";

export class AchievementServices {
    constructor(private achievementRepository: IAchievementsRepository) {}

    async getAchievementById(id: string) {
        const achievement = await this.achievementRepository.findById(id);

        if (!achievement) {
            throw new NotFoundError();
        }

        return achievement;
    }

    async listAchievements(userId?: string) {
        return await this.achievementRepository.findAll(userId);
    }

    async createAchievement(data: CreateAchievementType) {
        return await this.achievementRepository.create(data);
    }

    async updateAchievement(id: string, data: Partial<CreateAchievementType>) {
        const achievement = await this.achievementRepository.findById(id);

        if (!achievement) {
            throw new NotFoundError();
        }

        const updatedAchievement = await this.achievementRepository.update(id, data);

        return updatedAchievement;
    }

    async deleteAchievement(id: string) {
        const achievement = await this.achievementRepository.findById(id);

        if (!achievement) {
            throw new NotFoundError();
        }

        const deletedAchievement = await this.achievementRepository.delete(id);

        return deletedAchievement;
    }
}