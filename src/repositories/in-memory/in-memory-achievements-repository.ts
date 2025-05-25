import { randomUUID } from 'node:crypto';
import { Achievement } from "../../generated/prisma";
import { IAchievementsRepository, CreateAchievementType } from "../achievements-repository";
import NotFoundError from '../../utils/errors/not-found';

export class InMemoryAchievementsRepository implements IAchievementsRepository {
    private achievements: Achievement[] = [];

    async findById(id: string): Promise<Achievement | null> {
        return this.achievements.find(achievement => achievement.id === id) || null;
    }

    async create(data: CreateAchievementType): Promise<Achievement> {
        const achievement: Achievement = {
            id: randomUUID(),
            ...data,
        };
        this.achievements.push(achievement);
        return achievement;
    }

    async update(id: string, data: Partial<CreateAchievementType>): Promise<Achievement> {
        const achievement = await this.findById(id);
        if (!achievement) throw new NotFoundError();

        Object.assign(achievement, data);
        return achievement;
    }

    async findAll(): Promise<Achievement[]> {
        return this.achievements;
    }

    async delete(id: string): Promise<Achievement> {
        const index = this.achievements.findIndex(achievement => achievement.id === id);
        if (index === -1) throw new NotFoundError();

        const [deleted] = this.achievements.splice(index, 1);
        return deleted;
    }
}
