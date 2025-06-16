import { JsonValue } from "@prisma/client/runtime/library";
import { $Enums, Exercise } from "../../generated/prisma";
import { CreateExerciseType, IExercisesRepository } from "../exercise-repository";
import { randomUUID } from "node:crypto";

export class InMemoryExercisesRepository implements IExercisesRepository {
    public items: Exercise[] = [];

    async findById(id: string) {
        const exercise = this.items.find((exercise) => exercise.id === id);

        if (!exercise) {
            return null;
        }

        return exercise;
    }

    async listByLesson(lessonId: string) {
        const exercises = this.items.filter((exercise) => exercise.lessonId === lessonId);

        return exercises;
    }

    async create(data: CreateExerciseType) {
        const exercise = {
            id: randomUUID(),
            content: data.content as JsonValue,
            order: data.order,
            type: data.type,
            hint: data.hint,
            lessonId: data.lessonId,
        };

        this.items.push(exercise);

        return exercise;
    }

    async update(id: string, data: { statement?: string | undefined; hint?: string | undefined; order?: number | undefined; }) {
        const exerciseIndex = this.items.findIndex((exercise) => exercise.id === id);

        const exercise = this.items[exerciseIndex];

        const updatedExercise = {
            ...exercise,
            ...data,
        };

        this.items[exerciseIndex] = updatedExercise;

        return updatedExercise;
    }

    async delete(id: string) {
        const exerciseIndex = this.items.findIndex((exercise) => exercise.id === id);

        const [exercise] = this.items.splice(exerciseIndex, 1);

        return exercise;
    }
    
}