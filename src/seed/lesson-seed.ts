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
                name: "Tipos de Dados",
                description: "Aprenda o básico sobre os tipos de dados em programação (string, number e boolean).",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 2,
                rewardXP: 500
            },
            {
                id: "e572a55e-f93e-413b-89c6-94a71ac14c76",
                name: "Atribuição de valores",
                description: "Aprenda a atribuir valores à variáveis já existentes.",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 3,
                rewardXP: 500
            },
            {
                id: "f8a4a9f2-32aa-4c12-9b63-4e6a6e3e2c3d",
                name: "Constantes",
                description: "Aprenda sobre constantes.",
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                themeId: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                order: 4,
                rewardXP: 500
            },
        ],
    });
}