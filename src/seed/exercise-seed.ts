import { prisma } from "../lib/prisma";
import { ifElseExercises, ifElseIfExercises, ifExercises, switchExercises } from "./data/rpg/conditional/exercises";
import {
    arithmeticExercises,
    assignmentExercises,
    logicalExercises,
    relationalExercises,
} from "./data/rpg/operators/exercises";
import {
    assignmentLessonExercises,
    constExercises,
    dataTypesLessonExercises,
    firstLessonExercises,
} from "./data/rpg/variable/exercises";

const variableRPGExercises = [
    ...firstLessonExercises,
    ...dataTypesLessonExercises,
    ...assignmentLessonExercises,
    ...constExercises,
];

const operatorsRPGExercises = [
    ...arithmeticExercises,
    ...assignmentExercises,
    ...relationalExercises,
    ...logicalExercises,
];

const conditionalRPGExercises = [...ifExercises, ...ifElseExercises, ...ifElseIfExercises, ...switchExercises];

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [
            ...variableRPGExercises,
            ...operatorsRPGExercises,
            ...conditionalRPGExercises,
        ],
    });
}
