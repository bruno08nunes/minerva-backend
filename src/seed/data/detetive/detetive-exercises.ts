import { arraysAdvancedExercises, arraysExercises, handlingArraysExercises, iterationsArraysExercises } from "./arrays/exercises";
import { ifElseExercises, ifElseIfExercises, ifExercises, switchExercises } from "./conditional/exercises";
import { functionExercises, functionPureExercises, functionRecursiveExercises } from "./functions/exercises";
import { controlFlowExercises, doWhileExercises, forExercises, whileExercises } from "./loop/exercises";
import { classInheritanceExercises, objectLiteralExercises, prototypeThisExercises } from "./objects/exercises";
import { arithmeticExercises, assignmentExercises, logicalExercises, relationalExercises } from "./operators/exercises";
import { assignmentLessonExercises, constExercises, dataTypesLessonExercises, firstLessonExercises } from "./variable/exercises";

const variableExercises = [
    ...firstLessonExercises,
    ...dataTypesLessonExercises,
    ...assignmentLessonExercises,
    ...constExercises
];

const operatorExercises = [
    ...arithmeticExercises,
    ...assignmentExercises,
    ...relationalExercises,
    ...logicalExercises
];

const conditionalExercises = [
    ...ifExercises,
    ...ifElseExercises,
    ...ifElseIfExercises,
    ...switchExercises
];

const loopExercises = [
    ...whileExercises,
    ...doWhileExercises,
    ...forExercises,
    ...controlFlowExercises
];

const functionsExercises = [
    ...functionExercises,
    ...functionPureExercises,
    ...functionRecursiveExercises
];

const arrayExercises = [
    ...arraysExercises,
    ...handlingArraysExercises,
    ...arraysAdvancedExercises,
    ...iterationsArraysExercises
];

const objectsExercises = [
    ...objectLiteralExercises,
    ...prototypeThisExercises,
    ...classInheritanceExercises
];

export const detetiveExercises = [...variableExercises, ...operatorExercises, ...conditionalExercises, ...loopExercises, ...functionsExercises, ...arrayExercises, ...objectsExercises];