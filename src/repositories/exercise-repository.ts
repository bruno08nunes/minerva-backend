import { $Enums, Exercise, Prisma } from "../generated/prisma";

export interface CreateExerciseType {
    content: Prisma.InputJsonValue;
    order: number;
    type: $Enums.ExerciseType;
    hint: string;
    lessonId: string;
}

export interface IExercisesRepository {
    findById(id: string): Promise<Exercise | null>;
    listByLesson(lessonId: string): Promise<Exercise[]>;
    create(data: CreateExerciseType): Promise<Exercise>;
    update(id: string, data: { content?: Prisma.InputJsonValue, hint?: string, order?: number }): Promise<Exercise>;
    delete(id: string): Promise<Exercise>;
}