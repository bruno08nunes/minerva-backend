import { ifElseExercises, ifElseIfExercises, ifExercises, switchExercises } from "./conditional/exercises";
import { functionExercises, functionPureExercises, functionRecursiveExercises } from "./functions/exercises";
import { controlFlowExercises, doWhileExercises, forExercises, whileExercises } from "./loop/exercises";
import {
    arithmeticExercises,
    assignmentExercises,
    logicalExercises,
    relationalExercises,
} from "./operators/exercises";
import {
    assignmentLessonExercises,
    constExercises,
    dataTypesLessonExercises,
    firstLessonExercises,
} from "./variable/exercises";

const variableHorrorExercises = [
    ...firstLessonExercises,
    ...dataTypesLessonExercises,
    ...assignmentLessonExercises,
    ...constExercises,
];

const operatorsHorrorExercises = [
    ...arithmeticExercises,
    ...assignmentExercises,
    ...relationalExercises,
    ...logicalExercises,
];

const conditionalHorrorExercises = [
    ...ifExercises,
    ...ifElseExercises,
    ...ifElseIfExercises,
    ...switchExercises
]

const loopHorrorExercises = [
    ...whileExercises,
    ...doWhileExercises,
    ...forExercises,
    ...controlFlowExercises
];

const functionHorrorExercises = [
    ...functionExercises,
    ...functionPureExercises,
    ...functionRecursiveExercises
];

export const horrorExercises = [
    ...variableHorrorExercises,
    ...operatorsHorrorExercises,
    ...conditionalHorrorExercises,
    ...loopHorrorExercises,
    ...functionHorrorExercises
];
