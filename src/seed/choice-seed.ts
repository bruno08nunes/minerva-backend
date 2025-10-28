import { prisma } from "../lib/prisma";
import { arraysAdvancedChoices, arraysChoices, handlingArraysChoices, iterationsArraysChoices } from "./data/rpg/arrays/choices";
import { ifChoices, ifElseChoices, ifElseIfChoices, switchChoices } from "./data/rpg/conditional/choices";
import { functionPureChoices, functionRecursiveChoices, functionsChoices } from "./data/rpg/functions/choices";
import { controlFlowChoices, doWhileChoices, forChoices, whileChoices } from "./data/rpg/loop/choices";
import {
    arithmeticChoices,
    assignmentChoices,
    logicalChoices,
    relationalChoices,
} from "./data/rpg/operators/choices";
import {
    firstLessonChoices,
    dataTypesLessonChoices,
    assignmentLessonChoices,
    constChoices,
} from "./data/rpg/variable/choices";

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
]

export async function createChoices() {
    return prisma.choice.createMany({
        data: [...variableRPGChoices, ...operatorsRPGChoices, ...conditionalRPGChoices, ...loopRPGChoices, ...functionRPGChoices, ...arrayRPGChoices],
    });
}
