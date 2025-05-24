import { Progress } from "../../generated/prisma";
import { CreateProgressType, IProgressRepository } from "../progress-repository";

export class InMemoryProgressRepository implements IProgressRepository {
    public items: Progress[] = [];

    async find(userId: string, lessonId: string): Promise<Progress | null> {
        return this.items.find(item => item.userId === userId && item.lessonId === lessonId) || null
    }

    async create(data: CreateProgressType) {
        const progress = {
            ...data,
            lastTry: new Date()
        };

        this.items.push(progress);

        return progress;
    }

    async update(data: CreateProgressType): Promise<Progress> {
        const progressIndex = this.items.findIndex((item) => item.userId === data.userId && item.lessonId === data.lessonId);
        const progress = this.items[progressIndex];

        const updatedProgress = {
            ...progress,
            ...data,
            lastTry: new Date()
        };

        this.items[progressIndex] = updatedProgress;

        return updatedProgress;
    }
}