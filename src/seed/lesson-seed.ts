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
            {
                id: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
                name: "Introdução às Variáveis 2",
                description: "Aprenda o básico sobre variáveis em programação.",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 2,
                rewardXP: 500
            },
            {
                id: "e572a55e-f93e-413b-89c6-94a71ac14c76",
                name: "Introdução às Variáveis 3",
                description: "Aprenda o básico sobre variáveis em programação.",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 3,
                rewardXP: 500
            },
        ],
    });
}