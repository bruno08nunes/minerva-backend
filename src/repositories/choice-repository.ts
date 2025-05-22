import { Choice } from "../generated/prisma";

export interface CreateChoiceType {
    text: string;
    order: number;
    isCorrect: boolean;
    exerciseId: string;
}

export interface IChoicesRepository {
    findById(id: string): Promise<Choice | null>;
    listByExercise(exerciseId: string): Promise<Choice[]>;
    create(data: CreateChoiceType): Promise<Choice>;
    update(id: string, data: { text?: string, order?: number, isCorrect?: boolean }): Promise<Choice>;
    delete(id: string): Promise<Choice>;
}