import { randomUUID } from "node:crypto";
import { Lesson } from "../../generated/prisma";
import { ICreateLesson, ILessonRepository } from "../lessons-repository";

export class InMemoryLessonsRepository implements ILessonRepository {
    public items: Lesson[] = [];

    async findById(id: string) {
        const lesson = this.items.find((lesson) => lesson.id === id);

        if (!lesson) {
            return null;
        }

        return lesson;
    }

    async list() {
        return this.items;
    }

    async listByTopicAndTheme(topicId: string, themeId: string) {
        return this.items.filter(
            (lesson) => lesson.topicId === topicId && lesson.themeId === themeId
        );
    }

    async create(data: ICreateLesson) {
        const lesson = { id: randomUUID(), ...data };
        this.items.push(lesson);
        return lesson;
    }

    async update(
        id: string,
        data: {
            name?: string;
            description?: string;
            rewardXP?: number;
            order?: number;
        }
    ) {
        const lessonIndex = this.items.findIndex((lesson) => (lesson.id = id));
        const lesson = this.items[lessonIndex];

        this.items[lessonIndex] = {
            ...lesson,
            ...data,
        };

        return this.items[lessonIndex];
    }

    async delete(id: string) {
        const index = this.items.findIndex((lesson) => lesson.id === id);
        const [deletedLesson] = this.items.splice(index, 1);
        return deletedLesson;
    }
}
