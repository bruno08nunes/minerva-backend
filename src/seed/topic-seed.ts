import { prisma } from "../lib/prisma";

export async function createTopics() {
    return prisma.topic.createMany({
        data: [
            {
                id: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                name: "Variáveis",
                description: "Aprenda sobre variáveis, tipos de dados e como armazenar informações em seu código.",
                iconId: "9897d6f2-fb41-4554-b22f-d251f9941fa3",
                slug: "variaveis",
            }
        ]
    });
}