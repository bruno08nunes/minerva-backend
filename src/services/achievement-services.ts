import { AchievementType } from "@prisma/client";
import {
    IAchievementsRepository,
    CreateAchievementType,
} from "../repositories/achievements-repository";
import { IUserRepository } from "../repositories/users-repository";
import NotFoundError from "../utils/errors/not-found";

export class AchievementServices {
    constructor(
        private achievementRepository: IAchievementsRepository,
        private userRepository: IUserRepository,
    ) {}

    private async _getMetricValue(userId: string, type: AchievementType) {
        switch (type) {
            case "STREAK":
                const streak = this.userRepository.getStreak(userId);

                return streak;

            case "FOLLOW":
                return this.userRepository.hasMutualFollow(userId);

            case "RANKING":
                const { rankingPosition } =
                    (await this.userRepository.getUserRankingPosition(
                        userId,
                    )) ?? {};

                return rankingPosition;
        }
    }

    async checkAchievements(userId: string, type: AchievementType) {
        const value = (await this._getMetricValue(userId, type)) ?? 0;

        const achievements = await this.achievementRepository.findAvailable(
            type,
            +value,
        );

        if (!achievements.length) return [];

        const unlocked = await this.achievementRepository.findUnlocked(
            userId,
            achievements.map((a) => a.id),
        );
        const unlockedSet = new Set(unlocked.map((a) => a.achievementId));

        const newAchievements = achievements.filter(
            (a) => !unlockedSet.has(a.id),
        );

        if (!newAchievements.length) return [];

        await this.achievementRepository.unlockAchievements(
            userId,
            newAchievements.map((a) => a.id),
        );

        return newAchievements;
    }

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

        const updatedAchievement = await this.achievementRepository.update(
            id,
            data,
        );

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
