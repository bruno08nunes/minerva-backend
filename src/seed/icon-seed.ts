import { prisma } from "../lib/prisma";

export async function createIcons() {
    return prisma.icon.createMany({
        data: [
            {
                id: "9897d6f2-fb41-4554-b22f-d251f9941fa3",
                url: "variable.webp",
            },
            {
                id: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                url: "rpg.webp",
            },
        ],
    });
}