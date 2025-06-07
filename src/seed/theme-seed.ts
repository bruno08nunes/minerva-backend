import { prisma } from "../lib/prisma";

export async function createThemes() {
    return prisma.theme.createMany({
        data: [
            {
                id: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                name: "RPG",
                description: "Aprenda lógica e programação através de conceitos de RPG de Mesa, um jogo de interpretação baseado em turnos!",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                slug: "rpg",
            },
            {
                id: "bb858ea9-6327-48a5-a523-39a07fb82183",
                name: "Detetive",
                description: "O tema de detetive envolve resolver mistérios enquanto você aprende sobre lógica e programação",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                slug: "detetive",
            },
            {
                id: "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4",
                name: "Terror",
                description: "O tema de terror se liga tanto com o medo quanto com a ansiedade.",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
                slug: "terror"
            }
        ],
    });
}