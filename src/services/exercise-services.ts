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
        return await this.exerciseRepository.create(data);
    }

    async updateExercise(id: string, data: { statement: string; hint: string; order: number }) {
        const exercise = await this.exerciseRepository.findById(id);

        if (!exercise) {
            throw new NotFoundError();
        }

        const updatedExercise = await this.exerciseRepository.update(id, data);

        return updatedExercise;
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
