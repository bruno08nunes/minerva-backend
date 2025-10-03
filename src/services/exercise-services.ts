import { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";
import {
    CreateExerciseType,
    IExercisesRepository,
} from "../repositories/exercise-repository";
import NotFoundError from "../utils/errors/not-found";

export class ExerciseServices {
    constructor(private exerciseRepository: IExercisesRepository) {}

    async getExerciseById(id: string) {
        const exercise = await this.exerciseRepository.findById(id);

        if (!exercise) {
            throw new NotFoundError();
        }

        return exercise;
    }

    async listExercisesByLesson(lessonId: string) {
        return await this.exerciseRepository.listByLesson(lessonId);
    }

    async createExercise(data: CreateExerciseType) {
        const biggestOrder = await prisma.exercise.aggregate({
            _max: {
                order: true,
            },
            where: {
                lessonId: data.lessonId
            }
        });

        const nextOrder = biggestOrder._max?.order
            ? biggestOrder._max.order + 1
            : 1;

        return await this.exerciseRepository.create({
            ...data,
            order: nextOrder,
        });
    }

    async updateExercise(
        id: string,
        data: { content?: Prisma.InputJsonValue; hint?: string; order?: number }
    ) {
        const exercise = await this.exerciseRepository.findById(id);

        if (!exercise) {
            throw new NotFoundError();
        }

        const updatedExercise = await this.exerciseRepository.update(id, data);

        return updatedExercise;
    }

    async updateExercisesOrder(exercises: { id: string; order: number }[]) {
        return this.exerciseRepository.updateOrders(exercises);
    }

    async deleteExercise(id: string) {
        const exercise = await this.exerciseRepository.findById(id);

        if (!exercise) {
            throw new NotFoundError();
        }

        const deletedExercise = await this.exerciseRepository.delete(id);

        return deletedExercise;
    }
}
