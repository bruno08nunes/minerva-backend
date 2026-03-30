import { prisma } from "../lib/prisma";
import { lessonData } from "./data/lessons";

export async function createLessons() {
    return prisma.lesson.createMany({
        data: lessonData,
    });
}
