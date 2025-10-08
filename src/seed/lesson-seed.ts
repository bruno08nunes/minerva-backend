import { prisma } from "../lib/prisma";
import {
    operatorLessons,
    variableLessons,
} from "./data/rpg/variable-and-operators/lessons";

export async function createLessons() {
    return prisma.lesson.createMany({
        data: [...variableLessons, ...operatorLessons],
    });
}
