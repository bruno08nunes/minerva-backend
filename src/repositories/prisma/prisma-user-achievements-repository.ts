import { prisma } from "../../lib/prisma";
import { IUserAchievementsRepository } from "../user-achievements-repository";

export class PrismaUserAchievementsRepository
    implements IUserAchievementsRepository
{
    async getUserAchievement(userId: string, achievementId: string) {
        return prisma.userAchievement.findUnique({
            where: {
                userId_achievementId: {
                    achievementId,
                    userId,
                },
            },
            include: {
                achievement: true,
            },
        });
    }

    async getUserAchievements(userId: string) {
        return prisma.userAchievement.findMany({
            where: {
                userId,
            },
            include: {
                achievement: true,
            },
        });
    }

    async createUserAchievement(userId: string, achievementId: string) {
        return prisma.userAchievement.create({
            data: { userId, achievementId },
        });
    }

    async deleteUserAchievement(userId: string, achievementId: string) {
        return prisma.userAchievement.delete({
            where: {
                userId_achievementId: {
                    userId,
                    achievementId,
                },
            },
        });
    }
}
