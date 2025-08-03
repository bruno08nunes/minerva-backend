import { prisma } from "../lib/prisma";

export async function createExplanations() {
    return prisma.explanation.createMany({
        data: [
            {
                id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
                title: "Introdução às Variáveis",
                description: "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações.",
                content: {
                    toJSON: () => [
                        {
                            type: "paragraph",
                            data: "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações.",
                        },
                        {
                            type: "paragraph",
                            data: "Constantes, por outro lado, são valores fixos que não podem ser alterados após a sua declaração.",
                        },
                        {
                            type: "code",
                            data: "const x = 10;"
                        }
                    ],
                },
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
            }
        ],
    });
}
