import { Achievement, AchievementType } from "@prisma/client";

export interface CreateAchievementType {
    name: string;
    description: string;
    iconId: string;
    type: AchievementType;
    amount: number;
}

export interface IAchievementsRepository {
    findById(id: string): Promise<Achievement | null>;
    create(data: CreateAchievementType): Promise<Achievement>;
    update(
        id: string,
        data: Partial<CreateAchievementType>,
    ): Promise<Achievement>;
    findAll(userId?: string): Promise<Achievement[]>;
    delete(id: string): Promise<Achievement>;
    findAvailable(type: AchievementType, value: number): Promise<Achievement[]>;
    findUnlocked(
        userId: string,
        achievementsIds: string[],
    ): Promise<{ achievementId: string }[]>;
    unlockAchievements(
        userId: string,
        achievementsIds: string[],
    ): Promise<void>;
}
