import {
    arraysAdvancedChoices,
    arraysChoices,
    handlingArraysChoices,
    iterationsArraysChoices,
} from "./arrays/choices";
import {
    ifChoices,
    ifElseChoices,
    ifElseIfChoices,
    switchChoices,
} from "./conditional/choices";
import {
    functionPureChoices,
    functionRecursiveChoices,
    functionsChoices,
} from "./functions/choices";
import {
    controlFlowChoices,
    doWhileChoices,
    forChoices,
    whileChoices,
} from "./loop/choices";
import {
    classInheritanceChoices,
    objectLiteralChoices,
    prototypeThisChoices,
} from "./objects/choices";
import {
    arithmeticChoices,
    assignmentChoices,
    logicalChoices,
    relationalChoices,
} from "./operators/choices";
import {
    assignmentLessonChoices,
    constChoices,
    dataTypesLessonChoices,
    firstLessonChoices,
} from "./variable/choices";

const variableChoices = [
    ...firstLessonChoices,
    ...dataTypesLessonChoices,
    ...assignmentLessonChoices,
    ...constChoices,
];

const operatorChoices = [
    ...arithmeticChoices,
    ...assignmentChoices,
    ...relationalChoices,
    ...logicalChoices,
];

const conditionalChoices = [
    ...ifChoices,
    ...ifElseChoices,
    ...ifElseIfChoices,
    ...switchChoices,
];

const loopChoices = [
    ...whileChoices,
    ...doWhileChoices,
    ...forChoices,
    ...controlFlowChoices,
];

const functionChoices = [
    ...functionsChoices,
    ...functionPureChoices,
    ...functionRecursiveChoices,
];

const arrayChoices = [
    ...arraysChoices,
    ...handlingArraysChoices,
    ...arraysAdvancedChoices,
    ...iterationsArraysChoices,
];

const objChoices = [
    ...objectLiteralChoices,
    ...prototypeThisChoices,
    ...classInheritanceChoices,
];

export const detetiveChoices = [
    ...variableChoices,
    ...operatorChoices,
    ...conditionalChoices,
    ...loopChoices,
    ...functionChoices,
    ...arrayChoices,
    ...objChoices,
];
