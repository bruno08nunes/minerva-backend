import { prisma } from "../lib/prisma";
import { conditionalLessons } from "./data/rpg/conditional/lessons";
import { loopLessons } from "./data/rpg/loop/lessons";
import { operatorLessons } from "./data/rpg/operators/lessons";
import { variableLessons } from "./data/rpg/variable/lessons";

export async function createLessons() {
    return prisma.lesson.createMany({
        data: [...variableLessons, ...operatorLessons, ...conditionalLessons, ...loopLessons],
    });
}
