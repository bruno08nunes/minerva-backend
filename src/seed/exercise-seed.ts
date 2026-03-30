import { prisma } from "../lib/prisma";
import { exercises } from "./data/exercises";

export async function createExercises() {
    return prisma.exercise.createMany({
        data: exercises,
    });
}
