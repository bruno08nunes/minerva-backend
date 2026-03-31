import { arraysAdvancedChoices, arraysChoices, handlingArraysChoices, iterationsArraysChoices } from "./arrays/choices";
import { ifChoices, ifElseChoices, ifElseIfChoices, switchChoices } from "./conditional/choices";
import { functionPureChoices, functionRecursiveChoices, functionsChoices } from "./functions/choices";
import { controlFlowChoices, doWhileChoices, forChoices, whileChoices } from "./loop/choices";
import { classInheritanceChoices, objectLiteralChoices, prototypeThisChoices } from "./objects/choices";
import {
    arithmeticChoices,
    assignmentChoices,
    logicalChoices,
    relationalChoices,
} from "./operators/choices";
import {
    firstLessonChoices,
    dataTypesLessonChoices,
    assignmentLessonChoices,
    constChoices,
} from "./variable/choices";

const variableRPGChoices = [
    ...firstLessonChoices,
    ...dataTypesLessonChoices,
    ...assignmentLessonChoices,
    ...constChoices,
];

const operatorsRPGChoices = [
    ...arithmeticChoices,
    ...assignmentChoices,
    ...relationalChoices,
    ...logicalChoices,
];

const conditionalRPGChoices = [
    ...ifChoices,
    ...ifElseChoices,
    ...ifElseIfChoices,
    ...switchChoices
]

const loopRPGChoices = [
    ...whileChoices,
    ...doWhileChoices,
    ...forChoices,
    ...controlFlowChoices
]

const functionRPGChoices = [
    ...functionsChoices,
    ...functionPureChoices,
    ...functionRecursiveChoices
]

const arrayRPGChoices = [
    ...arraysChoices,
    ...handlingArraysChoices,
    ...arraysAdvancedChoices,
    ...iterationsArraysChoices
];

const objectRPGChoices = [
    ...objectLiteralChoices,
    ...prototypeThisChoices,
    ...classInheritanceChoices
]

export const rpgChoices = [...variableRPGChoices, ...operatorsRPGChoices, ...conditionalRPGChoices, ...loopRPGChoices, ...functionRPGChoices, ...arrayRPGChoices, ...objectRPGChoices];