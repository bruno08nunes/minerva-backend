import { prisma } from "../lib/prisma";

export async function createLessons() {
    return prisma.lesson.createMany({
        data: [
            {
                id: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                name: "Introdução às Variáveis",
                description: "Aprenda o básico sobre variáveis em programação.",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 1,
                rewardXP: 500
            },
        ],
    });
}