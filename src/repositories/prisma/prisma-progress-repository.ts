import { Progress } from "../../generated/prisma";
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
            data,
        });
    }
}
