import { prisma } from "../lib/prisma";
import {
    firstLessonChoices,
    dataTypesLessonChoices,
    assignmentLessonChoices,
    constChoices,
    arithmeticChoices,
} from "./data/rpg/variable-and-operators/choices";

export async function createChoices() {
    return prisma.choice.createMany({
        data: [
            ...firstLessonChoices,
            ...dataTypesLessonChoices,
            ...assignmentLessonChoices,
            ...constChoices,
            ...arithmeticChoices,
        ],
    });
}
