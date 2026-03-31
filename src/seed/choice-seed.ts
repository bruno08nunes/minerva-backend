import { prisma } from "../lib/prisma";
import { choices } from "./data/choices";

export async function createChoices() {
    return prisma.choice.createMany({
        data: [...choices],
    });
}
