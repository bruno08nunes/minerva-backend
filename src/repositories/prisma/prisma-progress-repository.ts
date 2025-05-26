import { prisma } from "../../lib/prisma";
import {
    CreateProgressType,
    IProgressRepository,
} from "../progress-repository";

export class PrismaProgressRepository implements IProgressRepository {
    find(userId: string, lessonId: string) {
        return prisma.progress.findUnique({
            where: { userId_lessonId: { userId, lessonId } },
        });
    }

    create(data: CreateProgressType) {
        return prisma.progress.create({ data });
    }

    update({ userId, lessonId, ...data }: CreateProgressType) {
        return prisma.progress.update({
            where: { userId_lessonId: { userId, lessonId } },
            data: {
                ...data,
                lastTry: new Date()
            },
        });
    }

    progress({ userId, lessonId, ...data }: CreateProgressType) {
        return prisma.progress.upsert({
            where: { userId_lessonId: { userId, lessonId } },
            update: {
                ...data,
                lastTry: new Date()
            },
            create: {
                ...data,
                userId,
                lessonId,
                lastTry: new Date()
            },
        });
    }
}
