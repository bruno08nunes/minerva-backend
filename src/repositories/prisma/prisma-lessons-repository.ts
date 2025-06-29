import { Lesson } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { ICreateLesson, ILessonRepository } from "../lessons-repository";

export class PrismaLessonsRepository implements ILessonRepository {
    async findById(id: string) {
        return prisma.lesson.findUnique({
            where: { id },
            include: {
                exercises: {
                    include: {
                        choices: {
                            orderBy: {
                                order: "asc",
                            },
                        },
                    },
                    orderBy: {
                        order: "asc",
                    },
                },
                topic: true,
                theme: true,
                icon: true,
            },
        });
    }

    async list() {
        return prisma.lesson.findMany({
            include: {
                exercises: {
                    include: {
                        choices: {
                            orderBy: {
                                order: "asc",
                            },
                        },
                    },
                    orderBy: {
                        order: "asc",
                    },
                },
                topic: true,
                theme: true,
                icon: true,
            },
            orderBy: { order: "asc" },
        });
    }

    async listByTopicAndTheme(
        topicId: string,
        themeId: string,
        userId?: string
    ) {
        const include: any = {
            exercises: {
                include: {
                    choices: {
                        orderBy: {
                            order: "asc",
                        },
                    },
                },
                orderBy: {
                    order: "asc",
                },
            },
            topic: true,
            theme: true,
            icon: true,
        };

        if (userId) {
            include.Progress = {
                where: {
                    userId: userId,
                },
            };
        }

        return prisma.lesson.findMany({
            where: {
                OR: [
                    {
                        topicId: topicId,
                        themeId: themeId,
                    },
                    {
                        topic: {
                            slug: topicId,
                        },
                        theme: {
                            slug: themeId,
                        },
                    },
                ],
            },
            include,
            orderBy: { order: "asc" },
        });
    }

    async create(data: ICreateLesson) {
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

    async update(
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

    async delete(id: string): Promise<Lesson> {
        return prisma.lesson.delete({ where: { id } });
    }
}
