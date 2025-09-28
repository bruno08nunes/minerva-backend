import { prisma } from "../../lib/prisma";
import {
    CreateExerciseType,
    IExercisesRepository,
} from "../exercise-repository";
import { Prisma } from "../../generated/prisma";

export class PrismaExercisesRepository implements IExercisesRepository {
    async findById(id: string) {
        const exercise = await prisma.exercise.findUnique({
            where: { id },
        });

        if (!exercise) {
            return null;
        }

        return exercise;
    }

    async listByLesson(lessonId: string) {
        return prisma.exercise.findMany({
            where: { lessonId },
            orderBy: { order: "asc" },
        });
    }

    async create(data: CreateExerciseType) {
        return prisma.exercise.create({ data });
    }

    async update(
        id: string,
        data: { content: Prisma.InputJsonValue; hint: string; order: number }
    ) {
        return prisma.exercise.update({
            where: { id },
            data,
        });
    }

    async updateOrders(exercises: { id: string; order: number }[]) {
        const transactions = exercises.map((exercise) =>
            prisma.exercise.update({
                where: { id: exercise.id },
                data: { order: exercise.order },
            })
        );

        return await prisma.$transaction(transactions);
    }

    async delete(id: string) {
        return prisma.exercise.delete({ where: { id } });
    }
}
