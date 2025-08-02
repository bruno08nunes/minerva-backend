import { prisma } from "../lib/prisma";

export async function createTopics() {
    return prisma.topic.createMany({
        data: [
            {
                id: "e58681e3-8305-4787-b63f-9e58b07c52a8",
                name: "Variáveis",
                description:
                    "Aprenda sobre variáveis, tipos de dados e como armazenar informações em seu código.",
                iconId: "030f0d8a-ee82-41a0-8cb1-b889e621f3e8",
                slug: "variaveis",
                order: 1,
            },
            {
                id: "218492d4-2a81-4b5a-a0fe-1fd644ee38be",
                name: "Operadores",
                description:
                    "Aprenda sobre operadores aritméticos, lógicos e relacionais.",
                iconId: "5b9cee42-3800-4402-b84d-e9c1b155cd56",
                slug: "operadores",
                order: 2,
            },
            {
                id: "7e3748c5-cb38-4304-9319-ba805dd13aa4",
                name: "Condicionais",
                description: "Aprenda sobre como mudar o percurso do código.",
                iconId: "2702e970-e644-477d-b122-997b7a9eb3f0",
                slug: "condicionais",
                order: 3,
            },
            {
                id: "d20a6380-9ee1-4a41-81fe-758133aaf35c",
                name: "Loops",
                description: "Aprenda sobre como repetir uma ação no código.",
                iconId: "6f57862d-63f3-4188-a144-daf4bd55b8cf",
                slug: "loops",
                order: 4,
            },
            {
                id: "b6101fef-e2c7-4c68-91dc-d47f10ba497c",
                name: "Funções",
                description: "Aprenda sobre como separar ações logicamente.",
                iconId: "af475526-d808-4e1a-8f57-ca2635a6499e",
                slug: "funcoes",
                order: 5,
            },
            {
                id: "36e04352-0d70-4198-8dfd-0e064e0d7e78",
                name: "Arrays",
                description: "Aprenda sobre como agrupar valores.",
                iconId: "3eb5016e-16be-4d96-a14d-24942d5d9484",
                slug: "arrays",
                order: 6,
            },
            {
                id: "205bf383-5b91-4502-a489-f9dd250fdcc1",
                name: "Objetos",
                description: "Aprenda sobre como agrupar valores.",
                iconId: "81998ea7-52a7-416d-9e09-6585e52033b0",
                slug: "objetos",
                order: 7,
            },
        ],
    });
}
