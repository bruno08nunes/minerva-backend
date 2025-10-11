import { prisma } from "../lib/prisma";
import { arithmeticChoices, assignmentChoices, logicalChoices, relationalChoices } from "./data/rpg/operators/choices";
import {
    firstLessonChoices,
    dataTypesLessonChoices,
    assignmentLessonChoices,
    constChoices,
} from "./data/rpg/variable/choices";

export async function createChoices() {
    return prisma.choice.createMany({
        data: [
            ...firstLessonChoices,
            ...dataTypesLessonChoices,
            ...assignmentLessonChoices,
            ...constChoices,
            ...arithmeticChoices,
            ...assignmentChoices,
            ...relationalChoices,
            ...logicalChoices,
        ],
    });
}
