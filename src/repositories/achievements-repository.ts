import { Achievement } from "../generated/prisma";

export interface CreateAchievementType {
    name: string;
    description: string;
    iconId: string;
}

export interface IAchievementsRepository {
    findById(id: string): Promise<Achievement | null>;
    create(data: CreateAchievementType): Promise<Achievement>;
    update(id: string, data: Partial<CreateAchievementType>): Promise<Achievement>;
    findAll(userId?: string): Promise<Achievement[]>;
    delete(id: string): Promise<Achievement>;
}