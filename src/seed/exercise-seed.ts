import { prisma } from "../lib/prisma";
import { arithmeticExercises, assignmentExercises, logicalExercises, relationalExercises } from "./data/rpg/operators/exercises";
import {
    assignmentLessonExercises,
    constExercises,
    dataTypesLessonExercises,
    firstLessonExercises,
} from "./data/rpg/variable/exercises";

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [
            ...firstLessonExercises,
            ...dataTypesLessonExercises,
            ...assignmentLessonExercises,
            ...constExercises,
            ...arithmeticExercises,
            ...assignmentExercises,
            ...relationalExercises,
            ...logicalExercises,
        ],
    });
}
