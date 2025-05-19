import { ICreateLesson } from "./../repositories/lessons-repository";
import { ILessonRepository } from "../repositories/lessons-repository";
import NotFoundError from "../utils/errors/not-found";

export class LessonServices {
    constructor(private lessonRepository: ILessonRepository) {}

    async getLessonById(id: string) {
        const lesson = await this.lessonRepository.findById(id);

        if (!lesson) {
            throw new NotFoundError();
        }

        return lesson;
    }

    async listAllLessons() {
        return this.lessonRepository.list();
    }

    async listLessonsByTopicAndTheme(topicId: string, themeId: string) {
        return this.lessonRepository.listByTopicAndTheme(topicId, themeId);
    }

    async createLesson(data: ICreateLesson) {
        return this.lessonRepository.create(data);
    }

    async updateLesson(
        id: string,
        data: {
            name: string;
            description: string;
            rewardXP: number;
            order: number;
        }
    ) {
        const lesson = this.lessonRepository.findById(id);

        if (!lesson) {
            throw new NotFoundError();
        }

        const updatedLesson = this.lessonRepository.update(id, data);

        return updatedLesson;
    };

    async deleteLesson(id: string) {
        const lesson = this.lessonRepository.findById(id);

        if (!lesson) {
            throw new NotFoundError();
        }

        const deletedLesson = this.lessonRepository.delete(id);

        return deletedLesson;
    }
}
