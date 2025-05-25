import { Achievement } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import {
    CreateAchievementType,
    IAchievementsRepository,
} from "../achievements-repository";

export class PrismaAchievementsRepository implements IAchievementsRepository {
    async findById(id: string): Promise<Achievement | null> {
        return prisma.achievement.findUnique({
            where: { id },
            include: {
                icon: true,
            },
        });
    }

    async create(data: CreateAchievementType): Promise<Achievement> {
        return prisma.achievement.create({
            data: {
                name: data.name,
                description: data.description,
                icon: {
                    connect: { id: data.iconId },
                },
            },
        });
    }

    async update(
        id: string,
        data: Partial<CreateAchievementType>
    ): Promise<Achievement> {
        return prisma.achievement.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
            },
        });
    }

    async findAll(userId?: string): Promise<Achievement[]> {
        return prisma.achievement.findMany({
            include: {
                icon: true,
                userAchievements: {
                    where: {
                        userId,
                    },
                    select: {
                        achievedAt: true,
                    },
                },
            }
        });
    }

    async delete(id: string): Promise<Achievement> {
        return prisma.achievement.delete({
            where: { id },
        });
    }
}
