import {
    arraysAdvancedExercises,
    arraysExercises,
    handlingArraysExercises,
    iterationsArraysExercises,
} from "./arrays/exercises";
import {
    ifElseExercises,
    ifElseIfExercises,
    ifExercises,
    switchExercises,
} from "./conditional/exercises";
import {
    functionExercises,
    functionPureExercises,
    functionRecursiveExercises,
} from "./functions/exercises";
import {
    controlFlowExercises,
    doWhileExercises,
    forExercises,
    whileExercises,
} from "./loop/exercises";
import {
    classInheritanceExercises,
    objectLiteralExercises,
    prototypeThisExercises,
} from "./objects/exercises";
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

const conditionalRPGExercises = [
    ...ifExercises,
    ...ifElseExercises,
    ...ifElseIfExercises,
    ...switchExercises,
];

const loopRPGExercises = [
    ...whileExercises,
    ...doWhileExercises,
    ...forExercises,
    ...controlFlowExercises,
];

const functionRPGExercises = [
    ...functionExercises,
    ...functionPureExercises,
    ...functionRecursiveExercises,
];

const arrayRPGExercises = [
    ...arraysExercises,
    ...handlingArraysExercises,
    ...arraysAdvancedExercises,
    ...iterationsArraysExercises,
];

const objectsRPGExercises = [
    ...objectLiteralExercises,
    ...prototypeThisExercises,
    ...classInheritanceExercises,
];

export const rpgExercises = [
    ...variableRPGExercises,
    ...operatorsRPGExercises,
    ...conditionalRPGExercises,
    ...loopRPGExercises,
    ...functionRPGExercises,
    ...arrayRPGExercises,
    ...objectsRPGExercises,
];
