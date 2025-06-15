import { prisma } from "../../lib/prisma";
import {
    CreateExerciseType,
    IExercisesRepository,
} from "../exercise-repository";

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
        data: { statement: string; hint: string; order: number }
    ) {
        return prisma.exercise.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return prisma.exercise.delete({ where: { id } });
    }
}
