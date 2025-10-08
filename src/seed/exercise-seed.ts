import { prisma } from "../lib/prisma";
import {
    arithmeticExercises,
    assignmentLessonExercises,
    constExercises,
    dataTypesLessonExercises,
    firstLessonExercises,
} from "./data/rpg/variable-and-operators/exercises";

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [
            ...firstLessonExercises,
            ...dataTypesLessonExercises,
            ...assignmentLessonExercises,
            ...constExercises,
            ...arithmeticExercises,
        ],
    });
}
