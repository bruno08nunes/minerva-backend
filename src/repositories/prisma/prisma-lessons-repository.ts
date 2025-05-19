import { Lesson } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { ICreateLesson, ILessonRepository } from "../lessons-repository";

export class PrismaLessonsRepository implements ILessonRepository {
    findById(id: string) {
        return prisma.lesson.findUnique({
            where: { id },
            include: {
                exercises: true,
                topic: true,
                theme: true,
                icon: true,
            },
        });
    }

    list() {
        return prisma.lesson.findMany({
            include: {
                exercises: true,
                topic: true,
                theme: true,
                icon: true,
            },
        });
    }

    listByTopicAndTheme(topicId: string, themeId: string) {
        return prisma.lesson.findMany({
            where: {
                topicId: topicId,
                themeId: themeId,
            },
            include: {
                exercises: true,
                topic: true,
                theme: true,
                icon: true,
            },
        });
    }

    create(data: ICreateLesson) {
        return prisma.lesson.create({
            data: {
                name: data.name,
                description: data.description,
                rewardXP: data.rewardXP,
                order: data.order,
                topic: { connect: { id: data.topicId } },
                theme: { connect: { id: data.themeId } },
                icon: { connect: { id: data.iconId } },
            },
        });
    }

    update(
        id: string,
        data: {
            name: string;
            description: string;
            rewardXP: number;
            order: number;
        }
    ) {
        return prisma.lesson.update({
            where: {
                id,
            },
            data,
        });
    }

    delete(id: string): Promise<Lesson> {
        return prisma.lesson.delete({ where: { id } });
    }
}
