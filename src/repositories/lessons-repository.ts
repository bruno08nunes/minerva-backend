import { Lesson } from "../generated/prisma";

export interface ICreateLesson {
    name: string;
    description: string;
    rewardXP: number;
    order: number;
    topicId: string;
    themeId: string;
    iconId: string;
}

export interface ILessonRepository {
    findById(id: string): Promise<Lesson | null>;
    list(): Promise<Lesson[]>;
    listByTopicAndTheme(topicId: string, themeId: string): Promise<Lesson[]>;
    create(data: ICreateLesson): Promise<Lesson>;
    update(id: string, data: { name: string, description: string, rewardXP: number, order: number }): Promise<Lesson>;
    delete(id: string): Promise<Lesson>;
}