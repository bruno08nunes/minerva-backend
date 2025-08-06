import { prisma } from "../lib/prisma";

export async function createIcons() {
    return prisma.icon.createMany({
        data: [
            {
                id: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                url: "rpg.png",
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
            {
                id: "030f0d8a-ee82-41a0-8cb1-b889e621f3e8",
                url: "variables.png",
            },
            {
                id: "5b9cee42-3800-4402-b84d-e9c1b155cd56",
                url: "operators.png",
            },
            {
                id: "2702e970-e644-477d-b122-997b7a9eb3f0",
                url: "conditionals.png",
            },
            {
                id: "6f57862d-63f3-4188-a144-daf4bd55b8cf",
                url: "loops.png",
            },
            {
                id: "af475526-d808-4e1a-8f57-ca2635a6499e",
                url: "functions.png",
            },
            {
                id: "3eb5016e-16be-4d96-a14d-24942d5d9484",
                url: "arrays.png",
            },
            {
                id: "81998ea7-52a7-416d-9e09-6585e52033b0",
                url: "objects.png",
            },
            {
                id: "bae1f351-03fd-4736-9d64-4a107bae8d1a",
                url: "horror.png",
            },
        ],
    });
}
