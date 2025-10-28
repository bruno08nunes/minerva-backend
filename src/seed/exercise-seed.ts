import { prisma } from "../lib/prisma";
import { arraysAdvancedExercises, arraysExercises, handlingArraysExercises, iterationsArraysExercises } from "./data/rpg/arrays/exercises";
import { ifElseExercises, ifElseIfExercises, ifExercises, switchExercises } from "./data/rpg/conditional/exercises";
import { functionExercises, functionPureExercises, functionRecursiveExercises } from "./data/rpg/functions/exercises";
import { controlFlowExercises, doWhileExercises, forExercises, whileExercises } from "./data/rpg/loop/exercises";
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

const loopRPGExercises = [...whileExercises, ...doWhileExercises, ...forExercises, ...controlFlowExercises];

const functionRPGExercises = [...functionExercises, ...functionPureExercises, ...functionRecursiveExercises];

const arrayRPGExercises = [...arraysExercises, ...handlingArraysExercises, ...arraysAdvancedExercises, ...iterationsArraysExercises];

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [
            ...variableRPGExercises,
            ...operatorsRPGExercises,
            ...conditionalRPGExercises,
            ...loopRPGExercises,
            ...functionRPGExercises,
            ...arrayRPGExercises
        ],
    });
}
