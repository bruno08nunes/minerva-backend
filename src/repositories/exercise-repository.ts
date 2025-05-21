import { $Enums, Exercise } from "../generated/prisma";

export interface CreateExerciseType {
    statement: string;
    order: number;
    type: $Enums.ExerciseType;
    hint: string;
    lessonId: string;
}

export interface IExercisesRepository {
    findById(id: string): Promise<Exercise | null>;
    listByLesson(lessonId: string): Promise<Exercise[]>;
    create(data: CreateExerciseType): Promise<Exercise>;
    update(id: string, data: { statement?: string, hint?: string, order?: number }): Promise<Exercise>;
    delete(id: string): Promise<Exercise>;
}