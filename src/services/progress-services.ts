import { CreateProgressType, IProgressRepository } from "../repositories/progress-repository";

export class ProgressServices {
    constructor (private progressRepository: IProgressRepository){}

    async find(userId: string, lessonId: string) {
        return await this.progressRepository.find(userId, lessonId) ?? { userId, lessonId, isCompleted: false, lastTry: null };
    }

    async progress(data: CreateProgressType) {
        const progress = this.progressRepository.find(data.userId, data.lessonId);

        if (!progress) {
            return this.progressRepository.create(data);
        }

        return this.progressRepository.update(data);
    }
}