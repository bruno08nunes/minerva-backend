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
                url: "rpg.jpg",
            },
            {
                id: "11558194-e95f-45d0-a3af-aa8058ac2b37",
                url: "friends-achievement.png",
            },
            {
                id: "35b91640-7b4e-4988-a9f9-8027b4280f5b",
                url: "nerd-achievement.png",
            },
            {
                id: "a0771cdd-ea68-4737-bb30-401fe7da4b98",
                url: "winner-achievement.png",
            },
        ],
    });
}