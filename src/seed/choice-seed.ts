import { prisma } from "../lib/prisma";
import { ifChoices, ifElseChoices, ifElseIfChoices, switchChoices } from "./data/rpg/conditional/choices";
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

export async function createChoices() {
    return prisma.choice.createMany({
        data: [...variableRPGChoices, ...operatorsRPGChoices, ...conditionalRPGChoices],
    });
}
